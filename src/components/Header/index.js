import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'

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
        <div className="max-w-xl mx-auto px-4 py-5 flex items-center justify-between flex-wrap">
          <Link
            to="/"
            className="flex items-center flex-no-shrink text-white mr-6 no-underline hover:underline focus:underline"
          >
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt=""
              className="mr-4"
            />
            <h1 className="font-normal text-xl">{siteTitle}</h1>
          </Link>
          <Menu />
        </div>
      </nav>
    )}
  />
)

export default Header
