/* eslint-disable */
import * as A from "fp-ts/lib/Array"
import * as NEA from "fp-ts/lib/NonEmptyArray"
import * as O from "fp-ts/lib/Option"
import * as P from "fp-ts/lib/pipeable"
// noinspection ES6UnusedImports
import * as Read from "fp-ts/lib/Reader"
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

type Group<T> = Record<string, NonEmptyArray<T>>

const mergePhone:
  (a: Hotline) => (b: Hotline) => Hotline =
  (a: Hotline) => (b: Hotline) => {
    a.phone = `${a.phone}, ${b.phone}`
    return a
  }

const mergeLang:
  (a: Hotline) => (b: Hotline) => Hotline =
  (a: Hotline) => (b: Hotline) => {
    a.lang = `${a.lang}, ${b.lang}`
    return a
  }

const mergeHotlines:
  (a: Hotline) => (b: Hotline) => Array<Hotline> =
  (a: Hotline) => (b: Hotline) => {
    if (a.hours === b.hours &&
        a.lang === b.lang &&
        a.phone !== b.phone) {
      return [mergePhone(a)(b),]
    } else if (a.phone === b.phone &&
               a.hours === b.hours &&
               a.lang === 'Japanese') {
      return [mergeLang(a)(b),]
    } else if (a.phone === b.phone &&
               a.hours === b.hours &&
               b.lang === 'Japanese') {
      return [mergeLang(b)(a),]
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

const collectHotlines:
  (hotlines: NonEmptyArray<Hotline>) => Array<Hotline> =
  (hotlines: NonEmptyArray<Hotline>) =>
    A.reduce([], reduceHotlines)(hotlines)

const formatStrLabel:
  (label: string) => (value: string) => string =
  (label: string) => (value: string) =>
    `${label}: ${value}`

const formatStrPhone:
  (phone: string) => string =
  (phone: string) => {
    const lbl = phone.startsWith('http') ? "Contact (VoIP)" : "Phone"
    return formatStrLabel(lbl)(phone)
  }

const formatStrHours: (_: string) => string =
  formatStrLabel("Hours of operation")

const formatStrLang: (_: string) => string =
  formatStrLabel("Supported languages")

const formatStrHotline:
  (h: Hotline) => Array<string> =
  (h: Hotline) =>
    [formatStrPhone(h.phone),
     formatStrHours(h.hours),
     formatStrLang(h.lang)]

// eslint-disable-next-line
const A_join:
  (key: string) => (xs: Array<string>) => string =
  (key: string) => (xs: Array<string>) =>
    xs.join(key)

// eslint-disable-next-line
const A_concat:
  <T>(xs: Array<T>) => (ys: Array<T>) => Array<T> =
  <T>(xs: Array<T>) => (ys: Array<T>) =>
    xs.concat(ys)

const groupAndFormatStrHotlines:
  (hotlines: NonEmptyArray<Hotline>) => Array<string> =
  (hotlines: NonEmptyArray<Hotline>) =>
    P.pipe(
      collectHotlines(hotlines),
      A.map(formatStrHotline),
      A.map(xs => xs.concat(["", ])),
      A.flatten
    )

const groupByCenterJa:
  (_: NonEmptyArray<Hotline>) => Group<Hotline> =
    NEA.groupBy((h: Hotline) => h.center_ja)

// fp-ts's implementation doesn't respect key order
const Rec_collect:
  <A, B>(f: (k: string, a: A) => B) => (r: Record<string, A>) => Array<B> =
  <A, B>(f: (k: string, a: A) => B) => (r: Record<string, A>) =>
    P.pipe(
      Object.entries(r),
      A.map(([k, a]) => f(k, a))
    )

const formatStrCenterName:
  (center: string) => string =
  (center: string) => `## Center: ${center}`

const formatStrCenters:
  (centers: Group<Hotline>) => Array<string> =
  (centers: Group<Hotline>) =>
    P.pipe(
      centers,
      Rec.map(groupAndFormatStrHotlines),
      Rec_collect((k, a: Array<string>) =>
        [formatStrCenterName(k), ""]
          .concat(a)
      ),
      A.flatten
    )

const groupPrefs:
  (areas: Record<string, Array<Hotline>>) => Record<string, Group<Hotline>> =
  (areas: Record<string, Array<Hotline>>) =>
    P.pipe(
      areas,
      Rec.filterMap(NEA.fromArray),
      Rec.map(groupByCenterJa)
    )

const formatStrPrefName:
  (pref: string) => string =
  (pref: string) => `# ${pref}`

const formatStrPrefs:
  (prefs: Record<string, Group<Hotline>>) => Array<string> =
  (prefs: Record<string, Group<Hotline>>) =>
    P.pipe(
      prefs,
      Rec.map(formatStrCenters),
      Rec_collect((k, a: Array<string>) =>
        [formatStrPrefName(k), ""]
          .concat(a)
      ),
      A.flatten
    )

function main(): void {
  const grouped: Record<string, Group<Hotline>> =
      groupPrefs(data.area)

  const formatted: Array<string> =
    formatStrPrefs(grouped)

  console.log(formatted.join("\n"))
}

if (require.main === module) {
  main()
}
