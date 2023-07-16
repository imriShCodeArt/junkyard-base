export type Message = {
  description: string
  id: string
  defaultMessage: string
}

export type Lang = {
  ['en']: Message[]
}

export interface ILanguageProviderProps {
  defaultLanguage: string
  messages: Lang[]
}
export interface ILanguageProviderConfig {
  defaultLanguage: string
  messages: Lang[]
}
