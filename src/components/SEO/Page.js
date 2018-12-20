import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../../../data/site-config'
import TwitterCard from './TwitterCard'
import OpenGraph from './OpenGraph'
import socialBanner from '../../images/social-banner.jpg'

const SEOPage = ({ title, type, description, image }) => {
  const { site } = config
  const formattedTitle = title ? `${title} | ${site.title}` : config.site.title
  const socialBannerUrl = `${site.url}${image || socialBanner}`
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
      <TwitterCard title={config.site.title} site={config.twitterHandle} />
      {image && (
        <>
          <TwitterCard image={socialBannerUrl} />
          {type && <OpenGraph image={socialBannerUrl} />}
        </>
      )}
      {type && <OpenGraph type={type} />}
      {description && <OpenGraph description={description} />}
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
