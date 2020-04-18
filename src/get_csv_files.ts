import * as CF from "cross-fetch"
import * as E from "fp-ts/lib/Either"
import * as TE from "fp-ts/lib/TaskEither"
import { promises as fs } from "fs"
import { array } from "fp-ts/lib/Array"
import { pipe } from "fp-ts/lib/pipeable"
import { TaskEither, taskEither, tryCatch } from "fp-ts/lib/TaskEither"
import * as R from "rambda"

import { run } from "./under_util"

const makeSpreadsheetUrl = (key: string, gid: string): string =>
  `https://docs.google.com/spreadsheets/d/e/${key}/pub?` +
  `gid=${gid}&single=true&output=csv`

const fetchGoogleSpreadSheetCsv = (
  key: string,
  gid: string
): TaskEither<Error, string> => {
  const url = makeSpreadsheetUrl(key, gid)
  return tryCatch(
    () =>  CF.fetch(url).then((x) => x.text()),
    E.toError
  )
}

const makeCsvFile = (
  fn: string,
  key: string,
  gid: string
): TaskEither<Error, string> => {
  const csv = `${fn}.csv`
  const writeM = (file: string, data: string): TaskEither<Error, void> =>
    tryCatch(() => fs.writeFile(csv, data), E.toError)

  return pipe(
    fetchGoogleSpreadSheetCsv(key, gid),
    TE.chain(R.partial(writeM, csv)),
    TE.map(_ => csv)
  )
}

const makeCsvFile_ = (
  [fn, key, gid]: [string, string, string]
): TaskEither<Error, string> =>
  makeCsvFile(fn, key, gid)

const cleanSheetName = (sheet: string): string =>
  sheet
    .trim()
    .toLowerCase()
    .replace('Foreign-language', '')
    .replace('[/- ]', '_')

// noinspection SpellCheckingInspection
const key: string =
  '2PACX-1vRd6DGCaxlPwhfgpH_b9jhBHxJ-k-iVXmtOYDVq2w_' +
  'qJutKk8nKN4iToAqPjtUw7kzh7cZSJuRV8Yra'

// noinspection SpellCheckingInspection
export const gids: Record<string, string> = {
  'hotlines': '2133443778',
  //'contents': '151378524',
  'hokkaido': '2127938906',
  'tohoku': '1010845727',
  'kanto': '1686906593',
  'chubu': '1422675244',
  'kansai': '843788725',
  'chugoku': '730111385',
  'shikoku': '623669625',
  'kyushu_okinawa': '1647012312',
  'menu': '151378524',
  'translations': '340977019',
  'webpages': '1947687836',
}

// noinspection JSUnusedGlobalSymbols
export const areas: Array<string> =
  ['hotlines', 'hokkaido', 'tohoku', 'kanto', 'chubu', 'kansai', 'chugoku',
   'shikoku', 'kyushu_okinawa', 'all']

// noinspection JSUnusedGlobalSymbols
export const sheets: Array<string> =
  Object.keys(gids)

export const makeFn = (sheet: string): string =>
  `data/${sheet}`

// noinspection JSUnusedGlobalSymbols
export const getSheet = (fn: string): string =>
  fn.split('/').slice(-1)[0]

// noinspection JSUnusedGlobalSymbols
export const fns: Array<string> =
  sheets.map(makeFn)

const fnKeyGids: Array<[string, string, string]> =
  Object
    .entries(gids)
    .map(([sheet, gid]) =>
      [makeFn(sheet), key, gid]
    )

const logError = (e: Error): void =>
  console.error(e)

const logFile = (file: string): void =>
  console.log(`wrote file "${file}"`)

const logFiles = (files: Array<string>): void => {
  const msg = files.map(file => `wrote file "${file}"`).join('\n')
  console.log(msg)
}

export const makeAllCsvFiles = (): Promise<void> => {
  const makeCsvFiles: TaskEither<Error, Array<string>> =
    array.traverse(taskEither)(fnKeyGids, makeCsvFile_)

  return run(makeCsvFiles)
    .then(E.fold(logError, logFiles))
    .catch(logError)
}

function main(): void {
  makeAllCsvFiles().then()
}

if (require.main === module) {
  main()
}
