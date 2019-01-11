import React from 'react'
import Helmet from 'react-helmet'

import config from '../../../data/site-config'
import OpenGraph from './OpenGraph'
import TwitterCard from './TwitterCard'

const SEOLayout = () => {
  const { name, url, title, description, keywords } = config.site
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
        // * Default Image stored in ./static
        image={`${url}/${config.siteImage}`}
      />
      <TwitterCard
        title={title}
        type="summary_large_image"
        site={config.twitterHandle}
      />
    </>
  )
}

export default SEOLayout
