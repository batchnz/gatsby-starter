import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const TwitterCard = ({
  type,
  title,
  site,
  creator,
  image,
  imageAlt,
  description,
}) => (
  <Helmet>
    {title && <meta name="twitter:title" content={title} />}
    {type && <meta name="twitter:card" content={type} />}
    {site && <meta name="twitter:site" content={`@${site}`} />}
    {creator && <meta name="twitter:creator" content={creator} />}
    {image && <meta name="twitter:image" content={image} />}
    {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
    {description && <meta name="twitter:description" content={description} />}
  </Helmet>
)

TwitterCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  site: PropTypes.string,
  creator: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
}
TwitterCard.defaultProps = {
  title: '',
  type: 'summary_large_image',
}

export default TwitterCard

// https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html
