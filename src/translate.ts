import TX from "./data/translations.json"

const makeObj = <K extends string | number | symbol, V>(
  arr: Array<[K, V]>
): Record<K, V> =>
  Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ))

const jaen: Record<string, string> =
  makeObj(TX.map(x => [x.Japanese, x.English]))
const enja: Record<string, string> =
  makeObj(TX.map(x => [x.English, x.Japanese]))
const trans: Record<string, Record<string, Record<string, string>>>
  = {'jp': {'en': jaen}, 'en': {'jp': enja}}

// noinspection JSUnusedGlobalSymbols
export const tx = (tgtLang: string, s: string): string => {
  const srcLang = (tgtLang === 'jp') ? 'en' : 'jp'
  const TX = trans[srcLang][tgtLang]
  for (const phrase in TX) {
    for (; ;) {
      // noinspection JSUnfilteredForInLoop
      const n = s.indexOf(phrase)
      if (n < 0)
        break
      // noinspection JSUnfilteredForInLoop
      s = s.substring(0, n) + TX[phrase] + s.substring(n + phrase.length)
    }
  }
  return s
}

if (require.main === module) {
}
