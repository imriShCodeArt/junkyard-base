// src/context/Language/Language.Context.tsx

import { createContext } from 'react'
import { ILanguageActions, ILanguageState } from './Language.types'

const LanguageContext = createContext<{
  state: ILanguageState
  actions: ILanguageActions
} | null>(null)

export default LanguageContext
