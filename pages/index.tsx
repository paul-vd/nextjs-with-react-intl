import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import Head from 'next/head'
import Layout from '../components/Layout'
import { useLocale } from '../components/IntlProvider'

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'An example app integrating React Intl with Next.js',
  },
})

export default () => {
  const intl = useIntl()
  const { setLocale } = useLocale()
  return (
    <Layout>
      <Head>
        <meta name="description" content={intl.formatMessage(description)} />
      </Head>
      <p>
        <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
      </p>
      <div>
        <button onClick={() => setLocale('en')}>English</button> | <button onClick={() => setLocale('fr')}>Français</button>
      </div>
    </Layout>
  )
}
