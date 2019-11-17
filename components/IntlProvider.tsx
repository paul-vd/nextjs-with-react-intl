import React, { useState, useEffect } from 'react'
import { createIntl, createIntlCache, RawIntlProvider, IntlConfig } from 'react-intl'
import cookie from 'js-cookie'
import getMessages from '../utils/getMessages'

type localeType = IntlConfig['locale']
type messagesType = IntlConfig['messages']

interface ContextProps {
  setLocale: (locale: localeType) => void
  locale: localeType
  messages: messagesType
}

const LocaleContext = React.createContext<any>({})

export const useLocale = () => React.useContext<ContextProps>(LocaleContext)

const cache = createIntlCache()

const IntlProvider: React.FC<Pick<ContextProps, 'locale' | 'messages'>> = ({ children, locale, messages }) => {
  const [intl, setIntl] = useState(createIntl({ locale, messages }, cache))

  const setLocale = async (nextLocale: localeType) => {
    // only triggered by used in this case go and fetch new locale data
    const nextMessages = await getMessages(nextLocale)
    setIntl(createIntl({ locale: nextLocale, messages: nextMessages }, cache))
    cookie.set('locale', nextLocale, { expires: 365 })
  }

  useEffect(() => {
    setIntl(createIntl({ locale, messages }, cache))
  }, [locale])

  return (
    <LocaleContext.Provider value={{ setLocale }}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </LocaleContext.Provider>
  )
}
export default IntlProvider
