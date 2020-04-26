import * as A from "fp-ts/lib/Array"
import * as NEA from "fp-ts/lib/NonEmptyArray"
import * as O from "fp-ts/lib/Option"
import * as P from "fp-ts/lib/pipeable"
import * as Rec from "fp-ts/lib/Record"
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray"
//import { Option } from "fp-ts/lib/Option"

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

const groupHotlines:
  (hotlines: NonEmptyArray<Hotline>) => Array<Hotline> =
  (hotlines: NonEmptyArray<Hotline>) =>
    P.pipe(
      hotlines,
      A.reduce([], reduceHotlines),
    )

const formatHotline:
  (h: Hotline) => string =
  (h: Hotline) => `Phone: ${h.phone}
Available hours: ${h.hours}
Supported languages: ${h.lang}`

const A_join:
  (key: string) => (xs: Array<string>) => string =
  (key: string) => (xs: Array<string>) => xs.join(key)

const groupAndFormatHotlines:
  (hotlines: NonEmptyArray<Hotline>) => string =
  (hotlines: NonEmptyArray<Hotline>) =>
    P.pipe(
      hotlines,
      groupHotlines,
      A.map(formatHotline),
      A_join("\n\n")
    )

const groupByCenterJa:
  (_: NonEmptyArray<Hotline>) => Record<string, NonEmptyArray<Hotline>> =
    NEA.groupBy((h: Hotline) => h.center_ja)

// fp-ts's implementation doesn't respect key order
const Rec_collect:
  <A, B>(f: (k: string, a: A) => B) => (r: Record<string, A>) => Array<B> =
  <A, B>(f: (k: string, a: A) => B) => (r: Record<string, A>) =>
    P.pipe(
      r,
      Object.entries,
      A.map(([k, a]) => f(k, a))
    )

const formatCenter:
  (centers: Record<string, NonEmptyArray<Hotline>>) => string =
  (centers: Record<string, NonEmptyArray<Hotline>>) =>
    P.pipe(
      centers,
      Rec.map(groupAndFormatHotlines),
      Rec_collect((k, a: string) =>
        `## Center: ${k}\n\n${a}`
      ),
      A_join("\n\n")
    )

const groupStuff:
  (areas: Record<string, Array<Hotline>>) =>
    Record<string, Record<string, NonEmptyArray<Hotline>>> =
  (areas: Record<string, Array<Hotline>>) =>
    P.pipe(
      areas,
      Rec.filterMap(NEA.fromArray),
      Rec.map(groupByCenterJa)
    )

function main(): void {
  //console.log(data.area)
  const grouped =
    P.pipe(
      data.area,
      groupStuff,
      Rec.map(formatCenter),
      Rec_collect((k, a: string) => `# ${k}\n\n${a}`),
      A_join("\n\n")
    )
    console.log(grouped)
}

if (require.main === module) {
  main()
}
