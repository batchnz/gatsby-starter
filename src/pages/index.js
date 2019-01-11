import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
import Menu from '../components/Menu'

import siteImage from '../images/site-image.jpg'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage
        title="Page 1"
        location={location}
        description="fake description"
        type="website"
        image={siteImage}
      />
      <Menu />
      <h1>Page 1</h1>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
