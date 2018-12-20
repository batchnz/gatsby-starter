import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import config from '../../../data/site-config'
import OpenGraph from './OpenGraph'
import socialBanner from '../../images/social-banner.jpg'

const SEOLayout = () => {
  const { name, url, title, description, keywords } = config.site
  const socialBannerUrl = `${url}${socialBanner}`
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <OpenGraph
        type="website"
        siteName={name}
        url={url}
        title={title}
        description={description}
        image={socialBannerUrl}
      />
    </>
  )
}

SEOLayout.propTypes = {
  location: PropTypes.object,
}

export default SEOLayout
