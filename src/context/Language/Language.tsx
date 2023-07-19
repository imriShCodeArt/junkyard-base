import { useConfigContext } from 'context/Config'
import { FC, useState } from 'react'
import { IntlProvider } from 'react-intl'
import Context from './Language.Context'
import { ILanguageProps, Message, Messages } from './Language.types'

const LanguageProvider: FC<ILanguageProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>('en')
  const messages = (useConfigContext().locale?.messages || {}) as Messages

  function formatMessages() {
    /*
    This function prepares localization messages for the IntlProvider component and maintains 
    a copy of these messages in the component state. It performs the following tasks:
    
    1. Iterates over each key in the 'messages' object. Each key represents a language (e.g., 'en', 'fr').
    2. For each language, it iterates over the array of 'Message' objects (each containing an 'id' and 'defaultMessage').
    3. For each 'Message', it adds an entry to the 'intlMessages' object with the 'id' as the key and 'defaultMessage' as the value. 
    This 'intlMessages' object is later passed to the IntlProvider for handling translations.
    4. Simultaneously, it constructs a 'stateMessages' object mimicking the structure of 'messages' but builds it dynamically. 
    For each 'Message', it ensures there's an array for its language in 'stateMessages' and then pushes the 'Message' into that array. 
    This 'stateMessages' object is used to preserve the original messages structure in the component's state.
    */
    const intlMessages: Record<string, string> = {}
    const stateMessages: Messages = {}
    Object.keys(messages).forEach((key) => {
      messages[key].forEach((message: Message) => {
        intlMessages[message.id] = message.defaultMessage
        if (!stateMessages[key]) {
          stateMessages[key] = []
        }
        stateMessages[key].push(message)
      })
    })
    return intlMessages
  }

  return (
    <IntlProvider locale={locale} messages={formatMessages()}>
      <Context.Provider
        value={{
          actions: { setLocale },
        }}
      >
        {children}
      </Context.Provider>
    </IntlProvider>
  )
}

export default LanguageProvider
