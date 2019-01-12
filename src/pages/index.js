import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'

import siteImage from '../images/site-image.jpg'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage
        title="Home"
        location={location}
        description="This is the page description"
        image={siteImage}
      />
      <h1 className="text-4xl leading-tight mb-2">Home</h1>
      <h2 className="text-xl mb-8">
        Adipisicing dolor sit amet consectetur adipisicing elit. Obcaecati
        voluptates ipsa esse aperiam quod.
      </h2>
      <div className="rte">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas est
          beatae, sunt, facere molestias blanditiis debitis veritatis
          repudiandae incidunt natus libero adipisci aperiam quo tenetur ad
          voluptate qui cupiditate sint laudantium consequuntur laborum. Error
          et veniam officia ab blanditiis! Expedita velit est itaque commodi sed
          iure inventore! A quae enim in porro, eaque libero dicta cum fugit ab
          facilis qui, sed, quod accusantium! Nihil veritatis incidunt optio
          aliquam error nulla sint beatae aspernatur itaque maxime magnam
          expedita perspiciatis ullam doloremque libero adipisci ratione harum
          vero soluta, quibusdam natus? Eligendi maiores at quos aliquid
          praesentium quae dignissimos quaerat illo sapiente explicabo possimus
          repellat, fuga magni! Quasi repellendus maxime ab animi ullam
          praesentium in, ad saepe, consectetur facere accusantium illo vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas est
          beatae, sunt, facere molestias blanditiis debitis veritatis
          repudiandae incidunt natus libero adipisci aperiam quo tenetur ad
          voluptate qui cupiditate sint laudantium consequuntur laborum
          assumenda asperiores alias! Dicta sit tempora possimus delectus ullam
          libero nam ea perspiciatis rem alias aliquid aliquam dolorem expedita,
          odit consequatur deleniti.
        </p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
