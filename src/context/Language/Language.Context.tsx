// src/context/Language/Language.Context.tsx

import { createContext } from 'react'
import { ILanguageActions } from './Language.types'

const LanguageContext = createContext<{
  actions: ILanguageActions
} | null>(null)

export default LanguageContext
