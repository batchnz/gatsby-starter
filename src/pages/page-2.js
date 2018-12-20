import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
import Link from '../components/TransitionLink'

const Page2 = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage title="Page 2" location={location} />
      <h1>Is it a single page application?</h1>
      <p>Just delete me, then you will got a SPA site</p>
      <p>Or, go build something great.</p>
      <Link cover to="/">Go HOME</Link>
    </Layout>
  )
}

Page2.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Page2
