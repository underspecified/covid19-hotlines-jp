import * as E from "fp-ts/lib/Either"
import * as IOE from "fp-ts/lib/IOEither"
import * as R from "rambda"
import { array } from "fp-ts/lib/Array"
import { ioEither, IOEither } from "fp-ts/lib/IOEither"
import { pipe } from "fp-ts/lib/pipeable"

import * as util from "./util"
import { areas, fns, getSheet, makeFn } from "./get_csv_files"
import { readFile, writeFile, run } from "./under_util"

type Row = Array<string>
type CSV = Array<Array<string>>

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

const normalizeHeader = (csv: CSV) => {
  if (R.isEmpty(csv)) {
    return csv
  } else {
    const head = R.head(csv)!.map(x => header[x] || x)
    const tail = R.tail(csv)
    return R.concat([head,], tail)
  }
}

const formatCsv = (csv: CSV) => {
  const normalized = normalizeHeader(csv)
  const head = R.head(normalized) || []
  const tail = R.tail(normalized)
  const grouped: Record<string, Array<Row>> =
    R.groupBy(row => row[0], tail)
  const mapped: Record<string, Array<Record<string, string>>> =
      R.map(
        (v: Array<Row>, _: string) =>
          v.map(row => Object.fromEntries(
            R.zip(head, row).filter(([_, v]) => v !== '' && v !== undefined)
          )),
         grouped
      )
  //console.log(mapped)
  return { 'area': mapped }
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
  return pipe(
    readFile(fn + ".csv"),
    IOE.map(x => x.toString()),
    IOE.map(csv2json)
  )
}

const csvFileToJsonFile = (fn: string): IOEither<Error, string> => {
  const json = `${fn}.json`
  return pipe(
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

  pipe(
    run(makeJsonFiles),
    E.fold(logError, logFiles)
  )
}

if (require.main === module) {
  writeCsvFileToJsonFiles()
}
