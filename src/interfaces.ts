export interface Hotline {
  pref_ja: string,
  pref_en: string,
  center_ja: string,
  center_en: string,
  phone: string,
  lang: string,
  hours: string,
  postal_code?: string | undefined,
  address?: string | undefined,
  url: string,
  comments?: string | undefined,
  topics?: string | undefined,
  hotline?: string | undefined,
}

export interface LangProps {
  lang: string,
}

export interface TxProps {
  lang: string,
  tx: (_: string) => string
}
