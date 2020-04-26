/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection ES6UnusedImports
import * as A from "fp-ts/lib/Array"
import * as NEA from "fp-ts/lib/NonEmptyArray"
// noinspection ES6UnusedImports
import * as O from "fp-ts/lib/Option"
import * as P from "fp-ts/lib/pipeable"
import * as Rec from "fp-ts/lib/Record"
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray"
// noinspection ES6UnusedImports
import { Option } from "fp-ts/lib/Option"

import data from "./data/all.json"

export interface Hotline {
  pref_ja: string,
  pref_en: string,
  center_ja: string,
  center_en: string,
  phone: string,
  lang: string,
  hours: string,
  postal_code?: string | undefined,
  address?: string | undefined,
  url: string,
  comments?: string | undefined
}

const hoursLangKey = (h: Hotline): string =>
  `Hours: ${h.hours}\nSupported languages: ${h.lang}`

const phoneKey = (h: Hotline): string =>
  `Phone: ${h.phone}\nHours: ${h.hours}`

const groupByHoursLang:
  (_: NonEmptyArray<Hotline>) => Record<string, NonEmptyArray<Hotline>> =
    NEA.groupBy(hoursLangKey)

const groupByPhone:
  (_: NonEmptyArray<Hotline>) => Record<string, NonEmptyArray<Hotline>> =
    NEA.groupBy(phoneKey)

const mergeHotlines:
  (a: Hotline) => (b: Hotline) => Array<Hotline> =
  (a: Hotline) => (b: Hotline) => {
    if (a.lang === 'Japanese') {
      a.lang = `${a.lang}, ${b.lang}`
      return [a, ]
    } else if (b.lang === ' Japanese') {
      b.lang = `${b.lang}, ${a.lang}`
      return [b, ]
    } else {
      return [a, b]
    }
  }

const reduceHotlines:
  (b: Array<Hotline>, a: Hotline) => Array<Hotline> =
  (b: Array<Hotline>, a: Hotline) =>
    P.pipe(
      A.last(b),
      O.map(mergeHotlines(a)),
      O.chain(m =>
        P.pipe(
          A.init(b),
          O.map(i => i.concat(m)))
      ),
      O.getOrElse(() => [a, ])
    )

const formatHourLangs:
  (phoneKey: string) => (hotlines: NonEmptyArray<Hotline>) => string =
  (phoneKey: string) => (hotlines: NonEmptyArray<Hotline>) =>
    P.pipe(
      A.reduce([], reduceHotlines)(hotlines),
      A.mapWithIndex((i, h: Hotline) =>
        `${i+1} ${phoneKey}\nSupported languages: ${h.lang}`
      )
    ).join("\n\n")

const formatPhones = (phones: NonEmptyArray<Hotline>): string =>
  `Phone: ${phones.map(h => h.phone).join(", ")}`

const A_join:
  (key: string) => (xs: Array<string>) => string =
  (key: string) => (xs: Array<string>) => xs.join(key)

const formatHourLangGroups:
  (groups: Record<string, NonEmptyArray<Hotline>>) => string =
  (groups: Record<string, NonEmptyArray<Hotline>>) =>
    P.pipe(
      groups,
      Rec.map(formatPhones),
      Rec.collect((k, a: string) => `${a}\n${k}`),
      A_join("\n\n")
    )

const formatPhoneGroups:
  (groups: Record<string, NonEmptyArray<Hotline>>) => string =
  (groups: Record<string, NonEmptyArray<Hotline>>) =>
    P.pipe(
      groups,
      Rec.collect((k, a) => formatHourLangs(k)(a)),
      A_join("\n\n")
    )

const groupAndFormatByHourLang:
  (hotlines: NonEmptyArray<Hotline>) => string =
  (hotlines: NonEmptyArray<Hotline>) =>
    P.pipe(
      hotlines,
      groupByHoursLang,
      formatHourLangGroups
    )

const groupAndFormatByPhone:
  (hotlines: NonEmptyArray<Hotline>) => string =
  (hotlines: NonEmptyArray<Hotline>) =>
    P.pipe(
      hotlines,
      groupByPhone,
      formatPhoneGroups
    )

const groupByCenterJa:
  (_: NonEmptyArray<Hotline>) => Record<string, NonEmptyArray<Hotline>> =
    NEA.groupBy((h: Hotline) => h.center_ja)

const formatCenterName:
  (center: string) => string =
  (center: string) => `Center: ${center}`

const formatCenter:
  (centers: Record<string, NonEmptyArray<Hotline>>) => string =
  (centers: Record<string, NonEmptyArray<Hotline>>) =>
    P.pipe(
      centers,
      Rec.map(groupAndFormatByPhone),
      Rec.collect((k, a: string) =>
        `## ${formatCenterName(k)}\n\n${a}`
      ),
      A_join("\n\n")
    )

function main(): void {
  const areas: Record<string, Array<Hotline>> =
    data.area
  const grouped =
    P.pipe(
      areas,
      Rec.filterMap(NEA.fromArray),
      Rec.map(groupByCenterJa),
      Rec.map(formatCenter),
      Rec.collect((k, a: string) => `# ${k}\n\n${a}`),
      A_join("\n\n")
    )
    console.log(grouped)
}

if (require.main === module) {
  main()
}
