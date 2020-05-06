import * as O from "fp-ts/lib/Option"
import * as NEA from "fp-ts/lib/NonEmptyArray"
import * as P from "fp-ts/lib/pipeable"
import * as R from "rambda"
import React from "react"
import { Accordion, Card } from "react-bootstrap"
import { StringUtils } from "turbocommons-ts"

import hotlines from "./data/support.json"
import { Group, Hotline, groupByCenter, updateCenterNames } from "./hotline"
import { tx as _tx } from "./translate"

import "./Support.css"
import {Option} from "fp-ts/lib/Option";

const makeId = (s: string): string =>
  StringUtils.formatCase(
    _tx('en')(s),
    StringUtils.FORMAT_LOWER_CAMEL_CASE
  )

const Hotlines = (props: {lang: string}): JSX.Element => {
  const tx = _tx(props.lang)

  const makeContactA = (phone: string): JSX.Element =>
    phone.startsWith('http') ?
      <a href={phone} target="_blank" rel="noopener noreferrer">
        {phone}
      </a> :
      <a href={"tel:" + phone}>{phone}</a>

  const makeContactsLi = (phones: Array<string>): JSX.Element => {
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
          {tx(label)}: {phonesBody}
        </li>
      </div>
    )
  }

  const makeHoursLi = (h: Hotline): JSX.Element => {
    const hours = h.hours.split('\n').map(tx)
    const hoursBody = hours.length > 1 ?
      <ul>{hours.map(x => <li>{x}</li>)}</ul> :
      hours
    return (
      <div className='hours-list'>
        <li>
          <div className='hours'>
            {tx('Hours of operation')}: {hoursBody}
          </div>
        </li>
      </div>
    )
  }

  const makeLangLi = (h: Hotline): JSX.Element => {
    const supportedLangs: string =
      P.pipe(
        O.fromNullable(h.lang),
        O.getOrElse(() => 'Japanese')
      )

    const langs = supportedLangs.split('\n').map(tx)
    const langsBody = langs.length > 1 ?
      <ul>{langs.map(x => <li>{tx(x)}</li>)}</ul> :
      langs
    return (
      <div className='lang-list'>
        <li>
          <div className='lang'>
            {tx('Supported languages')}: {langsBody}
          </div>
        </li>
      </div>
    )
  }

  const makeTopicsLi = (h: Hotline): JSX.Element | undefined => {
    const elem = P.pipe(
      h.topics,
      O.fromNullable,
      O.map(topics => {
        return (
          <div className='topics'>
            {tx('Topics')}: {tx(topics)}
          </div>
        )
      })
    )

    return O.toUndefined(elem)
  }

  const makeCenterLi  = (center: string, hotlines: Array<Hotline>) => {
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
            {makeContactsLi(phones)}
            {makeHoursLi(head)}
            {makeLangLi(head)}
            {makeTopicsLi(head)}
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
  }

  const hotlines2Element = (
    area: Array<Hotline>,
    pref: string
  ): JSX.Element => {
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
        .map(([k, v]) => makeCenterLi(k, v))

    return (
      <div id={makeId(pref)} className="area">
        <ul>
          {lis}
        </ul>
      </div>
    )
  }

  const makePrefToggle = (pref: string, area: Array<Hotline>) => (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={"pref-" + makeId(pref)}>
        <Card.Title>
          {tx(pref)}
        </Card.Title>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={"pref-" + makeId(pref)}>
        <Card.Body>
          {hotlines2Element(area, pref)}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )

  const sortEnPrefs = (
    prefs: Record<string, Array<Hotline>>
  ): Array<[string, Array<Hotline>]> => {
    const entries: Array<[string, Array<Hotline>]> = Object.entries(prefs)
    const tail: Array<[string, Array<Hotline>]> = R.tail(entries)
    return R.sortBy(
      ([k, v]) => sortByPrefId(k, v),
      tail
    )
  }

  const makeAccordionEn = () => {
    const sorted: Array<[string, Array<Hotline>]> =
      sortEnPrefs(hotlines.area)
    const toggles: Array<JSX.Element> =
      sorted.map(([k, v]) => makePrefToggle(k, v))

    return (
      <Accordion>
        {toggles}
      </Accordion>
    )
  }

  const sortByPrefId = (pref: string, area: Array<Hotline>) =>
    makeId(pref)

  const makeAccordionJp = () => {
    const entries: Array<[string, Array<Hotline>]> =
      Object.entries(hotlines.area)
    const tail: Array<[string, Array<Hotline>]> =
      R.tail(entries)
    const toggles: Array<JSX.Element> =
      tail.map(([k, v]) => makePrefToggle(k, v))

    return (
      <Accordion>
        {toggles}
      </Accordion>
    )
  }


  return (
    <div className="hotlines">
      <div className="title">
        <h3>{tx("Support Centers")}</h3>
      </div>
      <div className="date-updated">
        <p>{tx("Last updated")}: 2020/5/3</p>
      </div>
      {props.lang === 'en' ? makeAccordionEn(): makeAccordionJp()}
    </div>
  )
}

export default Hotlines
