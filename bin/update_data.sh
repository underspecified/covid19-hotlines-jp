#!/usr/bin/env bash

SCRIPT_DIR=$(dirname "$(greadlink -f "${BASH_SOURCE[0]}")")
ROOT_DIR=$(dirname "$SCRIPT_DIR")
SRC_DIR="${ROOT_DIR}/src"
DATA_DIR="${SRC_DIR}/data"
TS_NODE_COMPILER_OPTIONS='{\"module\":\"commonjs\"}'

function echo_and_eval() {
  echo "$@"
  eval "$@"
}

# get google spreadsheet csv files
echo_and_eval "(cd ${SRC_DIR} && \
ts-node -O ${TS_NODE_COMPILER_OPTIONS} get_csv_files.ts)"

# normalize csv files
for x in "${DATA_DIR}"/*.csv; do
    echo_and_eval "python3 ${ROOT_DIR}/py/normalize_csv_files.py ${x} \
> ${x/.csv/.yomi.csv}"
    echo_and_eval "mv ${x/.csv/.yomi.csv} ${x}"
    #echo_and_eval "open ${x}"
done

# aggregate area hotlines
HOTLINES="${DATA_DIR}/hotlines.csv ${DATA_DIR}/hokkaido.csv \
${DATA_DIR}/tohoku.csv ${DATA_DIR}/kanto.csv ${DATA_DIR}/chubu.csv \
${DATA_DIR}/kansai.csv ${DATA_DIR}/chugoku.csv ${DATA_DIR}/shikoku.csv \
${DATA_DIR}/kyushu_okinawa.csv"
echo_and_eval "python3 ${ROOT_DIR}/py/concat_csv_files.py ${HOTLINES} \
> ${DATA_DIR}/all.csv"

# convert csv files to json
echo_and_eval "(cd ${SRC_DIR} && \
ts-node -O ${TS_NODE_COMPILER_OPTIONS} make_json_files.ts)"
