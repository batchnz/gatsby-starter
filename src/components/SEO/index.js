import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ location, title, description, image, keywords, lang, meta }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const fullUrl =
          data.site.siteMetadata.siteUrl +
          location.pathname.replace(/\/$|$/, `/`)
        const fullDescription =
          description || data.site.siteMetadata.description
        const fullImage =
          image ||
          data.site.siteMetadata.siteUrl + '/' + data.site.siteMetadata.image
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              {
                rel: `canonical`,
                href: fullUrl,
              },
            ]}
            meta={[
              {
                name: `description`,
                content: fullDescription,
              },
              {
                property: `og:url`,
                content: fullUrl,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: fullDescription,
              },
              {
                property: `og:image`,
                content: fullImage,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.twitterHandle,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        twitterHandle
        siteUrl
        image
      }
    }
  }
`
