import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import SEOLayout from '../SEO/Layout'

import '../../styles/index.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEOLayout location={location} />
        <div className="font-sans leading-normal">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="max-w-xl mx-auto px-4 mt-16 mb-20">{children}</div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
