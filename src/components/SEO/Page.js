import React from 'react'
import PropTypes from 'prop-types'

import config from '../../../data/site-config'

import Helmet from 'react-helmet'
import OpenGraph from './OpenGraph'
import TwitterCard from './TwitterCard'

const SEOPage = ({ title, description, image, type }) => {
  const { site } = config
  return (
    <>
      {title && (
        <>
          <Helmet title={`${title} | ${site.title}`} />
          <OpenGraph title={`${title} | ${site.title}`} />
          <TwitterCard title={`${title} | ${site.title}`} />
        </>
      )}
      {description && (
        <>
          <Helmet>
            <meta name="description" content={description} />
          </Helmet>
          <OpenGraph description={description} />
          <TwitterCard description={description} />
        </>
      )}
      {/*
       * The image string requires the imported string path in the parent component
       * e.g.
       *    import siteImage from '../../images/site-image.jpg'
       *    <SEOPage image={siteImage} />
       */}
      {image && (
        <>
          <OpenGraph image={`${site.url}${image}`} />
          <TwitterCard image={`${site.url}${image}`} />
        </>
      )}
      {type && <OpenGraph type={type} />}
    </>
  )
}

SEOPage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default SEOPage
