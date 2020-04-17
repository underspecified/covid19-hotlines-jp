import React from "react"
import { Jumbotron } from "react-bootstrap"
import * as R from "rambda"
import { StringUtils } from "turbocommons-ts"

import "bootstrap/dist/css/bootstrap.min.css"

import hotlinesEn from "./data/hotlines.json"
import hotlinesJa from "./data/all.json"
import { Hotline } from "./hotline"
import { tx as _tx } from "./translate"
import "./App.css"

const makeId = (s: string): string =>
  StringUtils.formatCase(
    _tx('en', s),
    StringUtils.FORMAT_LOWER_CAMEL_CASE
  )

function App() {
  const lang = 'en'
  const tx = R.partial(_tx, lang)

  const makeLi = (
    label: string,
    content: string | JSX.Element
  ): JSX.Element =>
    <li>{tx(label)}: {content}</li>

  const makeProviderLi = (h: Hotline): JSX.Element => {
    const center = (lang === 'en') ? h.center_en : h.center_ja
    const provider = h.url ? <a href={h.url}>{center}</a> : center
    return makeLi('Provider', provider)
  }

  const makeContactLi = (h: Hotline): JSX.Element =>
    h.phone.startsWith('http') ?
      makeLi('Contact (VoIP)', <a href={h.phone}>{h.phone}</a>) :
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

  const makeLangLi = (h: Hotline): JSX.Element =>
    <li>
      <div className='lang'>
        {tx('Supported languages')}: {h.lang}
      </div>
    </li>

  const hotline2Element = (h: Hotline): JSX.Element => {
    const fs = (lang === 'en') && h.lang ?
      [makeProviderLi, makeContactLi, makeHoursLi, makeLangLi] :
      [makeProviderLi, makeContactLi, makeHoursLi]
    const lis = fs.map(f => f(h))

    return (
      <div className='hotline'>
        <ul>{lis}</ul>
      </div>
    )
  }

  const area2Element = (area: Array<Hotline>, pref: string): JSX.Element => {
    const lis = area.map(hotline2Element)
    return (
      <div id={makeId(pref)} className="area">
        <ul>
          <h4>{tx(pref)}</h4>
          {lis}
        </ul>
      </div>
    )
  }

  const hotlines: Record<string, Record<string, Array<Hotline>>> =
    (lang === 'en') ? hotlinesEn : hotlinesJa

  const hotlineElems: Array<JSX.Element> =
    Object.values(R.map(area2Element, hotlines.area))
  
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <Jumbotron fluid>
          <h1>COVID-19 Hotlines in Japan</h1>
          <p>{tx('新型コロナウィルス対策に役立つ情報')}</p>
        </Jumbotron>
      {/*</header>*/}
      {hotlineElems}
    </div>
  );
}

export default App
