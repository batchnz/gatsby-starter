import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="This is the Home description"
        location={location}
      />
      <h1 className="text-4xl leading-tight mb-4">Home</h1>
      <div className="rte">
        <p>Hello World</p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
