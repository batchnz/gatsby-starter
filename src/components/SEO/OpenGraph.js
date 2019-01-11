import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const OpenGraph = ({
  type,
  siteName,
  url,
  title,
  image,
  description,
  facebookId,
}) => (
  <Helmet>
    {/* Level Hight, required props */}
    {type && <meta property="og:type" content={type} />}
    {siteName && <meta property="og:site_name" content={siteName} />}
    {url && <meta property="og:url" content={url} />}

    {/* Level Middle * Facebook will share */}
    {title && <meta property="og:title" content={title} />}
    {image && <meta property="og:image" content={image} />}
    {description && <meta property="og:description" content={description} />}

    {/* Level Low */}
    {facebookId && <meta property="fb:app_id" content={facebookId} />}
  </Helmet>
)

OpenGraph.propTypes = {
  // Level Hight
  type: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // Level Middle
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  // Level Low
  facebookId: PropTypes.string,
}

export default OpenGraph

// https://neilpatel.com/blog/open-graph-meta-tags/
