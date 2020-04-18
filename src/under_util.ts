import * as E from 'fp-ts/lib/Either'
import * as IOE from "fp-ts/lib/IOEither";
import * as fs from 'fs'
import { IOEither } from "fp-ts/lib/IOEither";

export const run = <T>(thunk: () => T): T =>
  thunk()

export const readFile = (fn: string): IOEither<Error, Buffer> =>
  IOE.tryCatch(() => fs.readFileSync(fn), E.toError)

export const writeFile = (fn: string, data: string): IOEither<Error, void> =>
  IOE.tryCatch(() => fs.writeFileSync(fn, data), E.toError)
