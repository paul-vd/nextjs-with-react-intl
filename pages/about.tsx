import { FormattedMessage, useIntl, FormattedHTMLMessage } from 'react-intl'
import Layout from '../components/Layout'
import { NextPage } from 'next'

import dynamic from 'next/dynamic'

/**
 * This is a workaround for the problem that we experience in the index
 * @client Warning: Text content did not match. Server: "1,000" Client: "1 000"
 * @server [React Intl] Missing locale data for locale: "fr". Using default locale: "en" as fallback
 */
const DynamicTimeAgoNoSSR = dynamic(() => import('../components/TimeAgo'), { ssr: false })

const About: NextPage<{ date: string }> = ({ date }) => {
  const intl = useIntl()
  return (
    <Layout>
      <FormattedMessage id="happy.days" tagName="p" />
      {intl.formatMessage({ id: 'dynamic.no.ssr' })}: <DynamicTimeAgoNoSSR />
      <FormattedHTMLMessage id="html.example" values={{ VARIABLE: intl.formatMessage({ id: 'greeting' }) }} />
    </Layout>
  )
}

export default About
