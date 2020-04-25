import * as A from "fp-ts/lib/Array"
import * as E from "fp-ts/lib/Either"
import * as IOE from "fp-ts/lib/IOEither"
import * as NEA from "fp-ts/lib/NonEmptyArray"
import * as O from "fp-ts/lib/Option"
import * as P from "fp-ts/lib/pipeable"
import * as Rec from "fp-ts/lib/Record"
import * as R from "rambda"
import { array } from "fp-ts/lib/Array"
import { ioEither, IOEither } from "fp-ts/lib/IOEither"
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray"
import { Option } from "fp-ts/lib/Option"

import * as util from "./util"
import { areas, fns, getSheet, makeFn } from "./get_csv_files"
import { readFile, writeFile, run } from "./under_util"

type Row = Array<string>
type CSV = Array<Row>

// noinspection NonAsciiCharacters,JSNonASCIINames
const header: Record<string, string> = {
  '都道府県': 'pref_ja',
  'Prefecture': 'pref_en',
  'センター名': 'center_ja',
  'Center Name': 'center_en',
  'Phone number\n電話番号': 'phone',
  'Supported Languages\n対応言語': 'lang',
  'Open Hours\n対応時間': 'hours',
  'Postal code\n郵便番号': 'postal_code',
  'Address\n住所': 'address',
  'Homepage\nホームページ': 'url',
  'Comments\nコメント': 'comments'
}

const lookupHeader = (k: string): string =>
  P.pipe(
    Rec.lookup(k, header),
    O.getOrElse(() => k)
  )

const lookupHeaders:(row: Row) => Row =
  A.map(lookupHeader)

const normalizeHeader = (csv: CSV): CSV =>
  P.pipe(
    A.modifyAt(0, lookupHeaders)(csv),
    O.getOrElse(() => csv)
  )

const isDefined = (str?: string): boolean =>
  str !== undefined && str !== ''

const isDefinedEntry = ([k, v]: [string, string]) =>
  isDefined(v)

const headerAndRowToRecord:
  (header: Row) => (row: Row) => Record<string, string> =
  (header: Row) => (row: Row) =>
    P.pipe(
      A.zip(header, row),
      A.filter(isDefinedEntry),
      Object.fromEntries
    )

const headerAndRowsToRecords:
  (header: Row) => (rows: CSV) => Array<Record<string, string>> =
  (header: Row) => (rows: CSV) =>
    rows.map(headerAndRowToRecord(header))

const headerAndGroupsToRecordGroups:
  (header: Row) => (groups: Record<string, CSV>) =>
      Record<string, Array<Record<string, string>>> =
  (header: Row) => (groups: Record<string, CSV>) =>
      Rec.map(headerAndRowsToRecords(header))(groups)

const groupByPrefJa = (rows: NonEmptyArray<Row>): Record<string, CSV> =>
  P.pipe(
    NEA.groupBy((row: Row) => row[0])(rows),
    Rec.map(nea => nea.slice())
  )

const O_apFlip:
  <A, B>(fab: Option<(a: A) => B>) => (fa: Option<A>) => Option<B> =
  <A, B>(fab: Option<(a: A) => B>) => (fa: Option<A>) => O.ap(fa)(fab)

const formatCsv = (csv: CSV) => {
  const groups2RecordGroups =
    P.pipe(
      A.head(csv),
      O.map(lookupHeaders),
      O.map(headerAndGroupsToRecordGroups)
    )

  const records: Record<string, Array<Record<string, string>>> =
    P.pipe(
      A.tail(csv),
      O.chain(NEA.fromArray),
      O.map(groupByPrefJa),
      O_apFlip(groups2RecordGroups),
      O.getOrElse({} as any)
    )

  return { 'area': records }
}

const csvToFormattedJson: (_: string) => string =
  R.pipe(
    util.convertCSVtoArray,
    formatCsv,
    JSON.stringify
  )

const csvToJson: (_: string) => string =
  R.pipe(
    util.convertCSVtoArray,
    normalizeHeader,
    util.csv2json,
    JSON.stringify
  )

const csvFileToJson = (fn: string): IOEither<Error, string> => {
  const sheet = getSheet(fn)
  const csv2json = areas.includes(sheet) ? csvToFormattedJson : csvToJson
  return P.pipe(
    readFile(fn + ".csv"),
    IOE.map(x => x.toString()),
    IOE.map(csv2json)
  )
}

const csvFileToJsonFile = (fn: string): IOEither<Error, string> => {
  const json = `${fn}.json`
  return P.pipe(
    csvFileToJson(fn),
    IOE.chain(R.partial(writeFile, json)),
    IOE.map(_ => json)
  )
}

const logFiles = (files: Array<string>): void => {
  const msg = files.map(file => `wrote file "${file}"`).join('\n')
  console.log(msg)
}

const logError = (e: Error): void =>
  console.error(e)

const allFns: Array<string> =
  R.append(makeFn('all'), fns)

export const writeCsvFileToJsonFiles = (): void => {
  const makeJsonFiles: IOEither<Error, Array<string>> =
    array.traverse(ioEither)(allFns, csvFileToJsonFile)

  P.pipe(
    run(makeJsonFiles),
    E.fold(logError, logFiles)
  )
}

if (require.main === module) {
  writeCsvFileToJsonFiles()
}
