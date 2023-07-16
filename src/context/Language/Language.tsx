// (...)/Language/Language.tsx

import { FC, useState } from 'react'

import { useConfigContext } from 'context/Config'
import Context from './Language.Context'
import { ILanguageProps } from './Language.types'

const LanguageProvider: FC<ILanguageProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>('en')
  const { messages } = useConfigContext().locale || {}
  const msgObject = messages ? messages : []
  return (
    <Context.Provider
      value={{
        state: { messages: msgObject, defaultLocale: locale },
        actions: { setLocale },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default LanguageProvider
