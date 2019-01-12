import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
import Link from '../components/TransitionLink'

const Page2 = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage
        title="Page 2"
        location={location}
        description="This is the Page 2 description"
      />
      <h1 className="text-4xl leading-tight mb-4">Page 2</h1>
      <Link cover to="/">
        Go Home
      </Link>
    </Layout>
  )
}

Page2.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Page2
