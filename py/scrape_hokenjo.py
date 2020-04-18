import csv
import requests
import sys
from typing import Tuple, List

from bs4 import BeautifulSoup
from genmonads.iterator import miter
from genmonads.option import option
from genmonads.mtry import mtry
from genmonads.syntax import mfor
from html_table_extractor.extractor import Extractor


def table2lists(table):
    extractor = Extractor(table)
    extractor.parse()
    return extractor.return_list()


def get_all_tables(url):
    html = requests.get(url).content
    soup = BeautifulSoup(html, 'html.parser')
    return soup.find_all('table')


def scrape_table_text(url):
    for table in get_all_tables(url):
        for row in table2lists(table):
            yield row


def scrape_prefecture_url(li):
    prefecture = li.string
    url = option(li.find('a')).get_or_else('')
    return prefecture, url


# noinspection PyUnresolvedReferences
def scrape_hokenjo_table(url: str) -> List[Tuple[str, str, str]]:
    return mfor(
        (region, prefecture, url)
        for table in miter(get_all_tables(url))
        for tr in miter(table.find_all('tr'))
        for region in mtry(lambda: tr.find('th').string).to_miter()
        for td in option(tr.find('td')).to_miter()
        for li in miter(td.find_all('li'))
        for a in option(li.find('a')).to_miter()
        for prefecture in mtry(lambda: a.string).to_miter()
        for url in mtry(lambda: a['href']).to_miter()
    ).to_list()


def clean_url(url):
    return url.split('#')[0]


def scrape_hokenjo_urls(url: str):
    return {clean_url(u): True
            for _, _, u in scrape_hokenjo_table(url)}.keys()


def is_header(row):
    return row[0] in ['設置主体：', '都道府県名']


def main():
    urls = sys.argv[1:]
    writer = csv.writer(sys.stdout, csv.excel_tab)
    for u in urls:
        for uu in scrape_hokenjo_urls(u):
            for row in scrape_table_text(uu):
                if not is_header(row):
                    writer.writerow(row)


if __name__ == '__main__':
    main()
