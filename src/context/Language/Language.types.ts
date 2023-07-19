import { ReactNode } from 'react'

export type Message = {
  description: string
  id: string
  defaultMessage: string
}

export type Messages = {
  [key: string]: Message[]
}

export interface ILanguageProps {
  children: ReactNode
}

export interface ILanguageConfig {
  defaultLocale: string
  messages: Messages
}

export type ILanguageState = {
  defaultLocale: string
  messages: Messages
}

export type ILanguageActions = {
  setLocale: (locale: string) => void
}
