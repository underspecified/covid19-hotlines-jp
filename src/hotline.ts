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
import { Reader } from "fp-ts/lib/Reader"

import data from "./data/all.json"
import { tx } from "./translate";

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
  (label: string) => (value: string) => (lang: string) => string =
  (label: string) => (value: string) => (lang: string) =>
    `${tx(lang, label)}: ${tx(lang, value)}`

const formatStrPhone:
  (phone: string) => Reader<string, string> =
  (phone: string) => {
    const lbl = phone.startsWith('http') ? "Contact (VoIP)" : "Phone"
    return formatStrLabel(lbl)(phone)
  }

const formatStrHours: (_: string) => (lang: string) => string =
  formatStrLabel("Hours of operation")

const formatStrLang: (_: string) => Reader<string, string> =
  formatStrLabel("Supported languages")

const formatStrHotline:
  (h: Hotline) => (lang: string) => Array<string> =
  (h: Hotline) => (lang: string) =>
    [formatStrPhone(h.phone)(lang),
     formatStrHours(h.hours)(lang),
     formatStrLang(h.lang)(lang)]

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
  (hotlines: NonEmptyArray<Hotline>) => (lang: string) => Array<string> =
  (hotlines: NonEmptyArray<Hotline>) => (lang: string) =>
    P.pipe(
      collectHotlines(hotlines),
      A.map(h => formatStrHotline(h)(lang)),
      A.map(xs => xs.concat(["", ])),
      A.flatten
    )

const groupByCenter:
  (_: NonEmptyArray<Hotline>) => (lang: string) => Group<Hotline> =
  (_: NonEmptyArray<Hotline>) => (lang: string) =>
    NEA.groupBy((h: Hotline) =>
      lang === "en" ? h.center_en : h.center_ja
    )(_)

// fp-ts's implementation doesn't respect key order
const Rec_collect:
  <A, B>(f: (k: string, a: A) => B) => (r: Record<string, A>) => Array<B> =
  <A, B>(f: (k: string, a: A) => B) => (r: Record<string, A>) =>
    P.pipe(
      Object.entries(r),
      A.map(([k, a]) => f(k, a))
    )

const formatStrCenterName:
  (center: string) => (lang: string) => string =
  (center: string) => (lang: string) =>
    `## ${formatStrLabel("Center")(center)(lang)}`

const formatStrCenters:
  (centers: Group<Hotline>) => (lang: string) => Array<string> =
  (centers: Group<Hotline>) => (lang: string) =>
    P.pipe(
      centers,
      Rec.map(hs => groupAndFormatStrHotlines(hs)(lang)),
      Rec_collect((k, a: Array<string>) =>
        [formatStrCenterName(k)(lang), ""]
          .concat(a)
      ),
      A.flatten
    )

const groupPrefs:
  (areas: Record<string, Array<Hotline>>) => (lang: string) =>
    Record<string, Group<Hotline>> =
  (areas: Record<string, Array<Hotline>>) => (lang: string) =>
    P.pipe(
      areas,
      Rec.filterMap(NEA.fromArray),
      Rec.map(hs => groupByCenter(hs)(lang))
    )

const formatStrPrefName:
  (pref: string) => (lang: string) => string =
  (pref: string) => (lang: string) =>
    `# ${tx(lang, pref)}`

const formatStrPrefs:
  (prefs: Record<string, Group<Hotline>>) => (lang: string) => Array<string> =
  (prefs: Record<string, Group<Hotline>>) => (lang: string) =>
    P.pipe(
      prefs,
      Rec.map(cs => formatStrCenters(cs)(lang)),
      Rec_collect((k, a: Array<string>) =>
        [formatStrPrefName(k)(lang), ""]
          .concat(a)
      ),
      A.flatten
    )

function main(): void {
  const lang = "en"

  const grouped: Record<string, Group<Hotline>> =
      groupPrefs(data.area)(lang)

  const formatted: Array<string> =
    formatStrPrefs(grouped)(lang)

  console.log(formatted.join("\n"))
}

if (require.main === module) {
  main()
}
