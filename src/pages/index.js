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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
          labore iusto id nesciunt in dicta quas! Officiis voluptates incidunt
          praesentium ea, natus quod. Explicabo veritatis vel blanditiis aliquam
          eos nihil magni asperiores, mollitia animi aspernatur saepe vero illum
          odio praesentium? Perferendis eos sint blanditiis assumenda ut
          obcaecati! Quisquam, quaerat.
        </p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
