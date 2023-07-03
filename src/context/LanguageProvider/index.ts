// (...)/Language/index.ts

import { useContext } from 'react'

import Context from './utils/Context'

export { default } from './LanguageProvider'

export const useLanguage = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
