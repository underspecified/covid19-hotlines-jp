import { makeAllCsvFiles } from "./get_csv_files"
import { writeCsvFileToJsonFiles } from "./make_json_files"

function main() {
  makeAllCsvFiles()
    .then(_ =>  writeCsvFileToJsonFiles())
}

if (require.main === module) {
  main()
}
