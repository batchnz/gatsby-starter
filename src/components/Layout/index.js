import React from 'react'
import PropTypes from 'prop-types'

import SEOLayout from '../SEO/Layout'

import '../../styles/index.css'

const Layout = ({ location, children }) => (
  <>
    <SEOLayout location={location} />
    <div className="leading-normal">{children}</div>
  </>
)
Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
