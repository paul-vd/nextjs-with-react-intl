import { FormattedMessage, defineMessages, useIntl, FormattedNumber } from 'react-intl'
import Head from 'next/head'
import Layout from '../components/Layout'

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js',
  },
})

export default () => {
  const intl = useIntl()
  return (
    <Layout>
      <Head>
        <meta name="description" content={intl.formatMessage(description)} />
      </Head>
      <p>
        <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
      </p>
      <p>
        {/**
         * If your locale is cached as "fr" and you reload the page you should run into this warning on the client:
         * @client Warning: Text content did not match. Server: "1,000" Client: "1 000"
         * This happens because we need to polyfill the locale data on the node server:
         * @server [React Intl] Missing locale data for locale: "fr". Using default locale: "en" as fallback
         */}
        <FormattedNumber value={1000} />
      </p>
    </Layout>
  )
}
