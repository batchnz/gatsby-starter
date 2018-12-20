import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
import Link from '../components/TransitionLink'
import Hero from '../components/Section/Hero'
import Section from '../components/Section/Default'
import Header from '../components/Section/Header'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage title="Home" location={location} />
      <Header id="Header" />
      <Hero
        id="Hero"
        className="h-screen w-screen"
        styles={{
          backgroundSize: 'cover',
          color: 'white',
        }}
      >
        <h1>Section 1 - Hero</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link cover direction="right" to="/page-2/">
          Go to page 2
        </Link>
      </Hero>
      <Section
        id="AboutUs"
        className="h-screen w-screen"
        styles={{
          backgroundColor: 'lightGray',
        }}
      >
        <h1>Section 2 - AboutUs</h1>
      </Section>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
