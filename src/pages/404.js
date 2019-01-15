import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEOPage title="404" location={location} description="404" />
    <h1 className="text-4xl leading-tight mb-4">404</h1>
    <div className="rte">
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default NotFoundPage
