import { FormattedMessage, useIntl } from 'react-intl'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import fetch from 'isomorphic-unfetch'

import dynamic from 'next/dynamic'

const DynamicTimeAgoNoSSR = dynamic(() => import('../components/TimeAgo'), { ssr: false })

const About: NextPage<{ date: string }> = ({ date }) => {
  const intl = useIntl()
  return (
    <Layout>
      <FormattedMessage id="happy.days" tagName="p" />
      {intl.formatMessage({ id: 'dynamic.no.ssr' })}: <DynamicTimeAgoNoSSR />
    </Layout>
  )
}

About.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/date')
  const date = await res.json()
  return {
    date,
  }
}

export default About
