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
    {type && <meta property="og:type" content={type} />}
    {siteName && <meta property="og:site_name" content={siteName} />}
    {url && <meta property="og:url" content={url} />}
    {title && <meta property="og:title" content={title} />}
    {image && <meta property="og:image" content={image} />}
    {description && <meta property="og:description" content={description} />}
    {facebookId && <meta property="fb:app_id" content={facebookId} />}
  </Helmet>
)

OpenGraph.propTypes = {
  type: PropTypes.string,
  siteName: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  facebookId: PropTypes.string,
}

export default OpenGraph
