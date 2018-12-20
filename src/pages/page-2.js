import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
import Link from '../components/TransitionLink'

import Section from '../components/Section/Default'
const Page2 = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage title="Page 2" location={location} />
      <Section id="Page2_1" className="h-screen w-screen bg-orange-lighter">
        <h1>Page 2</h1>
        <Link cover to="/">
          Go HOME
        </Link>
      </Section>
    </Layout>
  )
}

Page2.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Page2
