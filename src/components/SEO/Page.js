import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../../../data/site-config'
import TwitterCard from './TwitterCard'
import OpenGraph from './OpenGraph'

const SEOPage = ({ title, type, description, image }) => {
  const { site } = config
  const formattedTitle = title ? `${title} | ${site.title}` : config.site.title
  return (
    <>
      {title && (
        <>
          <Helmet title={formattedTitle}>
            <meta name="title" content={formattedTitle} />
          </Helmet>
          <OpenGraph title={formattedTitle} />
        </>
      )}
      {description && (
        <>
          <Helmet>
            <meta name="description" content={description} />
          </Helmet>
          <OpenGraph description={description} />
        </>
      )}
      <TwitterCard title={config.site.title} site={config.twitterHandle} />
      {/*
       * The image string requires the imported string path in the parent component
       * e.g.
       *    import siteImage from '../../images/site-image.jpg'
       *    <SEOPage image={siteImage} />
       */}
      {image && (
        <>
          <TwitterCard image={`${site.url}${image}`} />
          <OpenGraph image={`${site.url}${image}`} />
        </>
      )}
      {type && <OpenGraph type={type} />}
    </>
  )
}

SEOPage.propTypes = {
  location: PropTypes.object,
  // ↓ ↓ ↓ optional, over write page default meta tags
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default SEOPage
