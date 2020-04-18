import csv
import re
import sys

import MeCab
import jaconv
import romkan

tagger = MeCab.Tagger('-Oyomi')
tokenizer = MeCab.Tagger('-Owakati')


def get_yomi_str(line: str) -> str:
    tokenized = tokenizer.parse(line)
    yomi = tagger.parse(tokenized).strip()
    romaji = romkan.to_hepburn(yomi)
    toks = [x.capitalize()
            for x in romaji.split(' ')]
    return ' '.join(toks)


def get_yomi(row):
    try:
        center = row['センター名'].strip()
        yomi = row['Center Name'].strip()
        return yomi if yomi else get_yomi_str(center)
    except KeyError:
        return ''


def update_row(row):
    return {k: get_yomi(row) if k == 'Center Name' else v
            for k, v in row.items()}


dash_re = re.compile(r'(?<![ぁ-んァ-ン])ー')
ws_re = re.compile(r'  +')


def normalize_line(line):
    half = jaconv.z2h(
        jaconv.normalize(line),
        kana=False, digit=True, ascii=True
    )
    stripped = half.strip()
    dashed = dash_re.sub('-', stripped)
    return ws_re.sub(' ', dashed)


def normalize_phone(line):
    return (
        normalize_line(line)
        .replace('(', '-')
        .replace(')', '-')
    )


phone_re = re.compile(r'(phone|電話)')


def normalize(line, field=''):
    if phone_re.match(field.lower()):
        return normalize_phone(line)
    else:
        return normalize_line(line)


def normalize_row(row):
    return {k: normalize(v)
            for k, v in row.items()}


def main():
    csv_files = sys.argv[1:]
    for i, csv_file in enumerate(csv_files):
        with open(csv_file) as f:
            reader = csv.DictReader(f)
            if ('センター名' in reader.fieldnames and
                    'Center Name' not in reader.fieldnames):
                header = reader.fieldnames + ['Center Name', ]
            else:
                header = reader.fieldnames
            writer = csv.DictWriter(sys.stdout, fieldnames=header)
            if i == 0:
                writer.writeheader()
            for row in reader:
                updated = update_row(row)
                normalized = normalize_row(updated)
                writer.writerow(normalized)


if __name__ == '__main__':
    main()
