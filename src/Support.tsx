import * as O from "fp-ts/lib/Option"
import * as NEA from "fp-ts/lib/NonEmptyArray"
import * as P from "fp-ts/lib/pipeable"
import * as R from "rambda"
import * as Read from "fp-ts/lib/Reader"
import * as Rec from "fp-ts/lib/Record"
import React from "react"
import { Reader } from "fp-ts/lib/Reader"
import { Accordion, Card } from "react-bootstrap"
import { StringUtils } from "turbocommons-ts"

import hotlines from "./data/support.json"
import { groupByCenter, updateCenterNames } from "./hotline"
import { Hotline, LangProps, TxProps } from "./interfaces"
import { tx as _tx } from "./translate"
import { Group } from "./types"

import "./Support.css"

const makeId = (s: string): string =>
  StringUtils.formatCase(
    _tx('en')(s),
    StringUtils.FORMAT_LOWER_CAMEL_CASE
  )

const makeContactA:
  (phone: string) => JSX.Element =
  (phone: string) => phone.startsWith('http') ?
    <a href={phone} target="_blank" rel="noopener noreferrer">
      {phone}
    </a> :
    <a href={"tel:" + phone}>{phone}</a>

const makeContactsLi:
  (phones: Array<string>) => Reader<TxProps, JSX.Element> =
  (phones: Array<string>) => Read.asks((props: TxProps) => {
    const phoneAs: Array<JSX.Element> =
      phones.map(makeContactA)
    const commas: Array<string> =
      R.repeat(", ", phoneAs.length)
    const label: string =
      R.head(phones)?.startsWith('http') ?
        'Contact (VoIP)' :
        'Phone'
    const phonesBody =
      R.dropLast(1, R.flatten(R.zip(phoneAs, commas)))

    return (
      <div className='phones'>
        <li>
          {props.tx(label)}: {phonesBody}
        </li>
      </div>
    )
  })

const makeHoursLi:
  (h: Hotline) => Reader<TxProps, JSX.Element> =
  (h: Hotline) => Read.asks((props: TxProps) => {
    const hours = h.hours.split('\n').map(props.tx)
    const hoursBody = hours.length > 1 ?
      <ul>{hours.map(x => <li>{x}</li>)}</ul> :
      hours
    return (
      <div className='hours-list'>
        <li>
          <div className='hours'>
            {props.tx('Hours of operation')}: {hoursBody}
          </div>
        </li>
      </div>
    )
  })

const makeLangLi:
  (h: Hotline) => Reader<TxProps, JSX.Element> =
  (h: Hotline) => Read.asks((props: TxProps) => {
    const supportedLangs: string =
      P.pipe(
        O.fromNullable(h.lang),
        O.getOrElse(() => 'Japanese')
      )

    const langs = supportedLangs.split('\n').map(props.tx)
    const langsBody = langs.length > 1 ?
      <ul>{langs.map(x => <li>{props.tx(x)}</li>)}</ul> :
      langs
    return (
      <div className='lang-list'>
        <li>
          <div className='lang'>
            {props.tx('Supported languages')}: {langsBody}
          </div>
        </li>
      </div>
    )
  })

const makeTopicsLi:
  (h: Hotline) => Reader<TxProps,  JSX.Element | undefined> =
  (h: Hotline) => Read.asks((props: TxProps) => {
    const elem = P.pipe(
      h.topics,
      O.fromNullable,
      O.map(ts => {
        const allTopics =
          P.pipe(
            O.fromNullable(h.hotline),
            O.map(_ =>
              ts + "\n" +
              "※Interpretation services for calling COVID-19 hotlines " +
              "available."
            ),
            O.getOrElse(() => ts)
          )

        const topics = allTopics.split('\n').map(props.tx)
        const topicsBody = topics.length > 1 ?
          <ul>{topics.map(x => <li>{props.tx(x)}</li>)}</ul> :
          topics

        return (
          <div className='topic-list'>
            <li>
              <div className='topic'>
                {props.tx('Topics')}: {topicsBody}
              </div>
            </li>
          </div>
        )
      })
    )

    return O.toUndefined(elem)
  })

const makeCenterLi:
  (center: string) => (hotlines: Array<Hotline>) =>
    Reader<TxProps, JSX.Element> =
  (center: string) => (hotlines: Array<Hotline>) =>
    Read.asks((props: TxProps) => {
    const url: string =
      P.pipe(
        R.head(hotlines),
        O.fromNullable,
        O.mapNullable((h: Hotline) => h.url),
        O.getOrElse(() => '')
      )

    const centerElem: string | JSX.Element =
      url ?
        <a target="_blank" rel="noopener noreferrer"
           href={url}>{center}</a> :
        center

    const grouped: Array<Array<Hotline>> =
      R.values(R.groupBy(h => `{h.hours}; {h.lang}`, hotlines))

    const body: Array<JSX.Element> =
      grouped.map((hs: Array<Hotline>) => {
        const phones = hs.map(h => h.phone)
        const head = R.head(hs)!
        return (
          <div className="hotline">
            {makeContactsLi(phones)(props)}
            {makeHoursLi(head)(props)}
            {makeLangLi(head)(props)}
            {makeTopicsLi(head)(props)}
          </div>
        )
      })

    return (
      <div className='center'>
        <h5>
          {centerElem}
        </h5>
        {body}
      </div>
    )
  })

const hotlines2Element:
  (area: Array<Hotline>) => (pref: string) => Reader<TxProps, JSX.Element> =
  (area: Array<Hotline>) => (pref: string) =>
    Read.asks((props: TxProps) => {
      const empty: Group<Hotline> = {}

      const centers: Group<Hotline> =
        P.pipe(
          NEA.fromArray(area),
          O.map(groupByCenter),
          O.map(o => updateCenterNames(o)(props.lang)),
          O.getOrElse(() => empty)
        )

      const lis =
        Object.entries(centers)
          .map(([k, v]) =>
            makeCenterLi(k)(v)(props)
          )

      return (
        <div id={makeId(pref)} className="area">
          <ul>
            {lis}
          </ul>
        </div>
      )
    })

const makePrefToggle:
  (pref: string) => (area: Array<Hotline>) =>
    Reader<TxProps, JSX.Element> =
  (pref: string) => (area: Array<Hotline>) =>
    Read.asks((props: TxProps) => (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={"pref-" + makeId(pref)}>
          <Card.Title>
            {props.tx(pref)}
          </Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={"pref-" + makeId(pref)}>
          <Card.Body>
            {hotlines2Element(area)(pref)(props)}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))

const sortByPrefId:
  (pref: string) => (area: Array<Hotline>) => string =
  (pref: string) => (area: Array<Hotline>) => makeId(pref)

const sortEnPrefs:
  (prefs: Group<Hotline>) => Array<[string, Array<Hotline>]> =
  (prefs: Group<Hotline>) => {
    const entries: Array<[string, Array<Hotline>]> = Object.entries(prefs)
    const tail: Array<[string, Array<Hotline>]> = R.tail(entries)
    return R.sortBy(
      ([k, v]) => sortByPrefId(k)(v),
      tail
    )
  }

export const makeAccordion:
  (prefs: Group<Hotline>) => Reader<TxProps, JSX.Element> =
  (prefs: Group<Hotline>) => Read.asks((props: TxProps) => {
    const sorted: Array<[string, Array<Hotline>]> =
      props.lang === "en" ?
        sortEnPrefs(prefs) :
        R.tail(Object.entries(prefs))

    const toggles: Array<JSX.Element> =
      sorted.map(([k, v]) => makePrefToggle(k)(v)(props))

    return (
      <Accordion>
        {toggles}
      </Accordion>
    )
  })

const makeEnExplanation:
  () => JSX.Element =
  () => { return (
    <div className="explanation">
      <p>
        Support centers are free services that are run by various
        governmental and volunteer organizations, and they provide information
        and other support for problems in daily life not directly related
        to COVID-19. Some of them will also offer interpretation services if
        you need help calling a Japanese-language COVID-19 hotline.
      </p>
    </div>
  )
}

const makeExplanation:
  Reader<TxProps, JSX.Element | undefined> =
  Read.asks((props: TxProps) =>
    props.lang === "en" ? makeEnExplanation() : undefined
  )

const Support: Reader<LangProps, JSX.Element> =
  Read.asks((props: LangProps) => {
    const txProps = {
      lang: props.lang,
      tx: _tx(props.lang)
    }

    const prefs: Group<Hotline> =
      Rec.filterMap(NEA.fromArray)(hotlines.area)

    return (
      <div className="support">
        <div className="title">
          <h3>{txProps.tx("Support Centers")}</h3>
        </div>

        {makeExplanation(txProps)}

        <div className="date-updated">
          <p>{txProps.tx("Last updated")}: 2020/5/7</p>
        </div>

        {makeAccordion(prefs)(txProps)}
      </div>
    )
  })

export default Support
