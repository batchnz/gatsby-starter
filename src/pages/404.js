import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = ({ location }) => (
  <Layout>
    <SEO title="404" description="404" location={location} />
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
