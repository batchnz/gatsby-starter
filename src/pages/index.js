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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas est
          beatae, sunt, facere molestias blanditiis debitis veritatis
          repudiandae incidunt natus libero adipisci aperiam quo tenetur ad
          voluptate qui cupiditate sint laudantium consequuntur laborum
          assumenda asperiores alias! Dicta sit tempora possimus delectus ullam
          libero nam ea perspiciatis rem alias aliquid aliquam dolorem expedita,
          odit consequatur deleniti. Ad necessitatibus eveniet tenetur
          distinctio molestiae. Porro, impedit velit ullam odit nulla quaerat ex
          et culpa ut saepe officia nam quo, voluptatem iste voluptates
          perspiciatis aperiam?
        </p>
        <p>
          Dicta sit tempora possimus delectus ullam libero nam ea perspiciatis
          rem alias aliquid aliquam dolorem expedita, odit consequatur deleniti.
        </p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
