// (...)/Language/index.ts

import { useContext } from 'react'

import Context from './Language.Context'

export { default } from './Language'

export const useLanguage = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export * from './Language.types'
