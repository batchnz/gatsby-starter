import React from 'react'
import Img from 'gatsby-image'
import Link from '../TransitionLink'
import { StaticQuery, graphql } from 'gatsby'

import Menu from '../Menu'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="bg-purple">
        <div className="max-w-xl mx-auto px-4 py-5 flex items-center">
          <Link
            className="text-white no-underline hover:underline focus:underline mr-6"
            classSpan="flex items-center"
            cover
            direction="right"
            to="/"
          >
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt="Gatsby"
              className="mr-4"
            />
            <h1 className="text-xl font-normal">{siteTitle}</h1>
          </Link>
          <Menu />
        </div>
      </nav>
    )}
  />
)

export default Header
