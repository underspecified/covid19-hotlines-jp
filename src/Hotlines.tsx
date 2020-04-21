import * as R from "rambda"
import React from "react"
import { Accordion, Card } from "react-bootstrap"
import { StringUtils } from "turbocommons-ts"

import hotlines from "./data/all.json"
//import webpages from "./data/webpages.json"
import { Hotline } from "./hotline"
import { tx as _tx } from "./translate"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Hotlines.css"

const makeId = (s: string): string =>
  StringUtils.formatCase(
    _tx('en', s),
    StringUtils.FORMAT_LOWER_CAMEL_CASE
  )

// const urls: Record<string, string> =
//   Object.fromEntries(
//     webpages.map(d => [d['pref_ja'], d['url']])
//   )

const Hotlines = (props: {lang: string}): JSX.Element => {
  const tx = R.partial(_tx, props.lang)

  const makeLi = (
    label: string,
    content: string | JSX.Element
  ): JSX.Element =>
    <li>{tx(label)}: {content}</li>

  const makeProviderLi = (h: Hotline): JSX.Element => {
    const center = (props.lang === 'en') ? h.center_en : h.center_ja
    const provider = h.url ?
      <a href={h.url} target="_blank" rel="noopener noreferrer">{center}</a> :
      center
    return makeLi('Provider', provider)
  }

  const makeContactLi = (h: Hotline): JSX.Element =>
    h.phone.startsWith('http') ?
      makeLi(
        'Contact (VoIP)',
        <a href={h.phone} target="_blank" rel="noopener noreferrer">
          {h.phone}
        </a>
      ) :
      makeLi('Phone', <a href={"tel:" + h.phone}>{h.phone}</a>)

  const makeHoursLi = (h: Hotline): JSX.Element => {
    const hours = h.hours.split('\n').map(tx)
    const hoursBody = hours.length > 1 ?
      <ul>{hours.map(x => <li>{x}</li>)}</ul> :
      hours
    return (
      <li>
        <div className='hours'>
          {tx('Hours of operation')}: {hoursBody}
        </div>
      </li>
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

  const hotline2Element = (h: Hotline): JSX.Element => {
    const fs = [makeProviderLi, makeContactLi, makeHoursLi, makeLangLi]
    const lis = fs.map(f => f(h))

    return (
      <div className='hotline'>
        <ul>{lis}</ul>
      </div>
    )
  }

  const hotlines2Element = (
    area: Array<Hotline>,
    pref: string
  ): JSX.Element => {
    const lis = area.map(hotline2Element)
    return (
      <div id={makeId(pref)} className="area">
        <ul>
          {lis}
        </ul>
      </div>
    )
  }

  // const area2Element = (
  //   area: Array<Hotline>,
  //   pref: string
  // ): JSX.Element => {
  //   const lis = area.map(hotline2Element)
  //   const prefElem =
  //     <h4>
  //       (<a href={urls[pref]} target="_blank" rel="noopener noreferrer">
  //         {tx(pref)}
  //       </a> || tx(pref))
  //     </h4>
  //   return (
  //     <div id={makeId(pref)} className="area">
  //       <ul>
  //         {prefElem}
  //         {lis}
  //       </ul>
  //     </div>
  //   )
  // }

  const makeToggle = (pref: string, area: Array<Hotline>) => (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={makeId(tx(pref))}>
        <Card.Title>
          {tx(pref)}
        </Card.Title>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={makeId(tx(pref))}>
        <Card.Body>
          {hotlines2Element(area, pref)}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )

  const sortByPrefId = (pref: string, area: Array<Hotline>) =>
    makeId(tx(pref))

  const sortEnAreas = (
    area: Record<string, Array<Hotline>>
  ): Array<[string, Array<Hotline>]> => {
    const entries: Array<[string, Array<Hotline>]> = Object.entries(area)
    const head: [string, Array<Hotline>] = R.head(entries)!
    const tail: Array<[string, Array<Hotline>]> = R.tail(entries)
    const sorted: Array<[string, Array<Hotline>]> = R.sortBy(
      ([k, v]) => sortByPrefId(k, v),
      tail
    )
    return R.concat([head, ], sorted)
  }

  const makeAccordion = () => {
    const sorted: Array<[string, Array<Hotline>]> =
      props.lang === 'en' ?
        sortEnAreas(hotlines.area) :
        Object.entries(hotlines.area)
    const toggles: Array<JSX.Element> =
      sorted.map(([k, v]) => makeToggle(k, v))

    return (
      <Accordion defaultActiveKey="allOfJapan">
        {toggles}
      </Accordion>
    )
  }

  return (
    <div className="hotlines">
      <h3>{tx("Hotlines")}</h3>
      <p>{tx("Last updated")} 2020/4/19.</p>
      {makeAccordion()}
    </div>
  )
}

export default Hotlines
