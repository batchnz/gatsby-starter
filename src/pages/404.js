import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEOPage title="Not Found" location={location} />
    <h1 className="text-4xl leading-tight mb-2">Not Found</h1>
    <h2 className="text-xl mb-8">
      You just hit a route that doesn&#39;t exist... the sadness.
    </h2>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
