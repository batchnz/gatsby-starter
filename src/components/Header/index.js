import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

import Link from '../TransitionLink'

import Menu from '../Menu'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "icon.png" }) {
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
        <div className="max-w-xl mx-auto md:flex md:items-center py-5 px-4">
          <Link
            className="block text-white no-underline hover:underline focus:underline mr-6 mb-4 md:mb-0"
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
            <div className="text-xl font-normal">{siteTitle}</div>
          </Link>
          <Menu />
        </div>
      </nav>
    )}
  />
)

export default Header
