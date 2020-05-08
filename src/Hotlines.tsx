import * as NEA from "fp-ts/lib/NonEmptyArray"
import * as Read from "fp-ts/lib/Reader"
import * as Rec from "fp-ts/lib/Record"
import React from "react"
import { Reader } from "fp-ts/lib/Reader"

import { makeAccordion } from "./Support"
import hotlines from "./data/all.json"
import { Hotline, LangProps, TxProps } from "./interfaces"
import { tx as _tx } from "./translate"
import { Group } from "./types"

import "./Hotlines.css"

const makeEnExplanation:
  () => JSX.Element =
  () => { return (
    <div className="explanation">
      <p>
        These hotlines are government and volunteer-run organizations that
        provide medical consultation on testing if you are worried that you
        have COVID-19. We recommend first calling the foreign-language hotlines
        listed for your prefecture. If you cannot get help, then call one of
        the Japanese-language hotlines.
      </p>
    </div>
  )
}

const makeJaExplanation:
  () => JSX.Element =
  () => { return (
    <div className="explanation">
      <p>
        新型コロナウイルス感染症の感染が疑われる方は、直接医療機関へ受診せず、事前に帰国者・接触者相談センターまでご相談ください。もし日本語が話せない場合、まずは多言語対応のコールセンターに連絡してください。もし電話がつながらない場合または日本語が話せる場合、日本語対応の直接帰国者・接触者相談センターに連絡してください。
      </p>
    </div>
  )
}
const makeExplanation:
  Reader<TxProps, JSX.Element> =
  Read.asks((props: TxProps) =>
    props.lang === "en" ? makeEnExplanation() : makeJaExplanation()
  )

const Hotlines: Reader<LangProps, JSX.Element> =
  Read.asks((props: LangProps) => {
    const txProps: TxProps = {
      lang: props.lang,
      tx: _tx(props.lang)
    }

    const prefs: Group<Hotline> =
      Rec.filterMap(NEA.fromArray)(hotlines.area)

    return (
      <div className="hotlines">
        <div className="title">
          <h3>{txProps.tx("Hotlines")}</h3>
        </div>

        {makeExplanation(txProps)}

        <div className="date-updated">
          <p>{txProps.tx("Last updated")}: 2020/5/3</p>
        </div>

        {makeAccordion(prefs)(txProps)}
      </div>
    )
  })

export default Hotlines
