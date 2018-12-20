import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const OpenGraph = ({
  type,
  siteName,
  url,
  image,
  title,
  description,
  facebookId,
}) => (
  <Helmet>
    {/* Level Hight */}
    {type && <meta property="og:type" content={type} />}
    {siteName && <meta property="og:site_name" content={siteName} />}
    {url && <meta property="og:url" content={url} />}

    {/* Level middle && Facebook will share */}
    {image && <meta property="og:image" content={image} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}

    {/* Level Low */}
    {facebookId && <meta property="fb:app_id" content={facebookId} />}
  </Helmet>
)

OpenGraph.propTypes = {
  type: PropTypes.string,
  siteName: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  facebookId: PropTypes.string,
}

export default OpenGraph

// https://neilpatel.com/blog/open-graph-meta-tags/
