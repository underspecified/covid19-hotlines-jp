import * as Read from "fp-ts/lib/Reader"
import React from "react"
import { Reader } from "fp-ts/lib/Reader"

import { makeAccordion } from "./Support"
import hotlines from "./data/all.json"
import { Hotline, LangProps, TxProps } from "./interfaces"
import { tx as _tx } from "./translate"

import "./Hotlines.css"
import {Group} from "./types";
import * as Rec from "fp-ts/lib/Record";
import * as NEA from "fp-ts/lib/NonEmptyArray";

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
        <div className="date-updated">
          <p>{txProps.tx("Last updated")}: 2020/5/3</p>
        </div>
        {makeAccordion(prefs)(txProps)}
      </div>
    )
  })

export default Hotlines
