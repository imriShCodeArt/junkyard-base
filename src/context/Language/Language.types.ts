import { ReactNode } from 'react'

export type Message = {
  description: string
  id: string
  defaultMessage: string
}

export type Lang = {
  [key: string]: Message[]
}

export interface ILanguageProps {
  children: ReactNode
}

export interface ILanguageConfig {
  defaultLocale: string
  messages: Lang[]
}

export type ILanguageState = {
  defaultLocale: string
  messages: Lang[]
}

export type ILanguageActions = {
  setLocale: (locale: string) => void
}
