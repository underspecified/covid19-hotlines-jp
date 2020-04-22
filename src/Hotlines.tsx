/* eslint-disable @typescript-eslint/no-unused-vars */
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

// noinspection NonAsciiCharacters
const region: Record<string, string> = {
  '北海道': '北海道',
  '青森県': '東北',
  '岩手県': '東北',
  '宮城県': '東北',
  '秋田県': '東北',
  '山形県': '東北',
  '福島県': '東北',
  '東京都': '関東',
  '茨城県': '関東',
  '栃木県': '関東',
  '群馬県': '関東',
  '埼玉県': '関東',
  '千葉県': '関東',
  '神奈川県': '関東',
  '新潟県': '中部',
  '富山県': '中部',
  '石川県': '中部',
  '福井県': '中部',
  '山梨県': '中部',
  '長野県': '中部',
  '岐阜県': '中部',
  '静岡県': '中部',
  '愛知県': '中部',
  '三重県': '関西',
  '滋賀県': '関西',
  '京都府': '関西',
  '大阪府': '関西',
  '兵庫県': '関西',
  '奈良県': '関西',
  '和歌山県': '関西',
  '鳥取県': '中国',
  '島根県': '中国',
  '岡山県': '中国',
  '広島県': '中国',
  '山口県': '中国',
  '徳島県': '四国',
  '香川県': '四国',
  '愛媛県': '四国',
  '高知県': '四国',
  '福岡県': '九州・沖縄',
  '佐賀県': '九州・沖縄',
  '長崎県': '九州・沖縄',
  '熊本県': '九州・沖縄',
  '大分県': '九州・沖縄',
  '宮崎県': '九州・沖縄',
  '鹿児島県': '九州・沖縄',
  '沖縄県': '九州・沖縄'
}

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

  const prefs2Regions = (
    prefs: Record<string, Array<Hotline>>
  ): Record<string, Array<[string, Array<Hotline>]>> => {
    const entries: Array<[string, Array<Hotline>]> = Object.entries(prefs)
    const tail: Array<[string, Array<Hotline>]> = R.tail(entries)
    return R.groupBy(([k, v]) => region[k], tail)
  }

    const sortByPrefId = (pref: string, area: Array<Hotline>) =>
    makeId(pref)

  const makeRegionToggle = (
    region: string,
    prefs: Array<[string, Array<Hotline>]>
  ): JSX.Element => {
    return prefs.length === 1 ?
      R.head(prefs.map(([k, v]) => makePrefToggle(k, v)))! :
      (
        <Card>
          <Accordion.Toggle as={Card.Header}
                            eventKey={"region" + makeId(region)}>
            <Card.Title>
              {region}
            </Card.Title>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={"region" + makeId(region)}>
            <Card.Body>
              {prefs.map(([k, v]) => makePrefToggle(k, v))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )
  }

  const makeAccordionJp = () => {
    // const sorted = Object.entries(prefs2Regions(hotlines.area))
    // const toggles: Array<JSX.Element> =
    //   sorted.map(([k, v]) =>
    //     makeRegionToggle(k, v)
    //   )
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
      <h3>{tx("Hotlines")}</h3>
      {props.lang === 'en' ? makeAccordionEn(): makeAccordionJp()}
      <p>{tx("Last updated")} 2020/4/19.</p>
    </div>
  )
}

export default Hotlines
