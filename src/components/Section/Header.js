import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'

import Menu from '../Menu'
import Inner from './Inner'

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
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <nav className="bg-purple">
        <Inner className="flex items-center justify-between flex-wrap">
          <Link
            to="/"
            className="flex items-center flex-no-shrink text-white mr-6 no-underline hover:underline focus:underline"
          >
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt=""
              className="mr-4"
            />
            <h1 className="font-normal text-xl">
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <Menu />
        </Inner>
      </nav>
    )}
  />
)

export default Header
