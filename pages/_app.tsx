import App from 'next/app'
import React from 'react'

import IntlProvider from '../components/IntlProvider'

import getLocale from '../utils/getLocale'
import getMessages from '../utils/getMessages'

if (typeof window === 'undefined') {
  // dom parser for FormatedHTMLMessages
  global.DOMParser = new (require('jsdom').JSDOM)().window.DOMParser
}

export default class MyApp extends App<{ locale: any; messages: any }> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const locale = await getLocale(ctx)
    const messages = await getMessages(locale)

    return { pageProps, locale, messages }
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props

    return (
      <IntlProvider locale={locale} messages={messages}>
        <Component {...pageProps} />
      </IntlProvider>
    )
  }
}
