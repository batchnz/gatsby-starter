import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
// Sections
import Section from '../components/Section/Default'
import SectionHero from '../components/Section/Hero'
import SectionHeader from '../components/Section/Header'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage title="Home" location={location} />
      <SectionHeader id="Header" />
      <SectionHero id="Hero" className="h-screen w-screen bg-cover text-white">
        <h1>Section 1 - Hero</h1>
      </SectionHero>
      <Section id="AboutUs" className="h-screen w-screen bg-grey-lightest">
        <h1>Section 2 - AboutUs</h1>
      </Section>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
