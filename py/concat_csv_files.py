import csv
import sys


def main():
    csv_files = sys.argv[1:]
    for i, csv_file in enumerate(csv_files):
        with open(csv_file) as f:
            reader = csv.DictReader(f)
            header = reader.fieldnames
            writer = csv.DictWriter(sys.stdout, fieldnames=header)
            if i == 0:
                writer.writeheader()
            for row in reader:
                writer.writerow(row)


if __name__ == '__main__':
    main()
