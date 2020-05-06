export interface Hotline {
  pref_ja: string,
  pref_en: string,
  center_ja: string,
  center_en: string,
  phone: string,
  lang: string,
  hours: string,
  postal_code?: string,
  address?: string,
  url: string,
  comments?: string,
  topics?: string,
  hotline?: string,
}

export interface LangProps {
  lang: string,
}

export interface TxProps {
  lang: string,
  tx: (_: string) => string
}
