import * as O from "fp-ts/lib/Option"
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray"
import { Reader } from "fp-ts/lib/Reader"
import { Option } from "fp-ts/lib/Option"
import { createCheckers } from "ts-interface-checker"

import { Hotline } from "./interfaces"
import InterfacesTIS from "./interfaces-ti"

export type Row = Array<string>

export type CSV = Array<Row>

export type Group<T> = Record<string, NonEmptyArray<T>>

export type WithLang<T> = Reader<string, T>

export const { Hotline: HotlineC } =
  createCheckers(InterfacesTIS)

export const verifyHotline:
  (obj: Object) => Option<Hotline> =
  (obj: Object) => HotlineC.test(obj) ? O.some(obj as Hotline) : O.none
