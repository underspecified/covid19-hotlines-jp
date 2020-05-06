import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { Reader } from "fp-ts/lib/Reader";

export type Row = Array<string>

export type CSV = Array<Row>

export type Group<T> = Record<string, NonEmptyArray<T>>

export type WithLang<T> = Reader<string, T>
