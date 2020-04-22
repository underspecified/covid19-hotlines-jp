import * as R from "rambda"
import React from "react"
import { Accordion, Card } from "react-bootstrap"
import { StringUtils } from "turbocommons-ts"

import hotlines from "./data/all.json"
import { Hotline } from "./hotline"
import { tx as _tx } from "./translate"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Hotlines.css"

const makeId = (s: string): string =>
  StringUtils.formatCase(
    _tx('en', s),
    StringUtils.FORMAT_LOWER_CAMEL_CASE
  )

const Hotlines = (props: {lang: string}): JSX.Element => {
  const tx = R.partial(_tx, props.lang)

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
    const supportedLangs = h.lang || 'Japanese'
    return (
      <li>
        <div className='lang'>
          {tx('Supported languages')}: {tx(supportedLangs)}
        </div>
      </li>
    )
  }

  const makeCenterLi  = (center :string, hotlines: Array<Hotline>) => {
    const grouped: Array<Array<Hotline>> =
      R.values(R.groupBy(h => `{h.hours}; {h.lang}`, hotlines))
    const body =
      grouped.map((hs: Array<Hotline>) => {
        const phones = hs.map(h => h.phone)
        const head = R.head(hs)!
        return (
          <div className="hotline">
            {makeContactsLi(phones)}
            {makeHoursLi(head)}
            {makeLangLi(head)}
          </div>
        )
      })
    return (
      <div className='center'>
        <h5>{tx(center)}</h5>
        {body}
      </div>
    )
  }

  const hotlines2Element = (
    area: Array<Hotline>,
    pref: string
  ): JSX.Element => {
    const centers: Record<string, Array<Hotline>> =
      R.groupBy(h =>
        props.lang === 'en' ?
          h.center_en  :
          h.center_ja, area
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
        <h3>{tx("Hotlines")}</h3>
      </div>
      <div className="date-updated">
        <p>{tx("Last updated")}: 2020/4/22</p>
      </div>
      {props.lang === 'en' ? makeAccordionEn(): makeAccordionJp()}
    </div>
  )
}

export default Hotlines
