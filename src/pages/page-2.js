import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEOPage from '../components/SEO/Page'
import Link from '../components/TransitionLink'
import Form from '../components/Form'

const Page2 = ({ location }) => {
  return (
    <Layout location={location}>
      <SEOPage
        title="Page 2"
        location={location}
        description="This is the Page 2 description"
      />
      <h1 className="text-4xl leading-tight mb-4">Page 2</h1>
      {/* <Form /> */}
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="textarea" name="message" placeholder="leave a message" />
        <input type="text" name="newsletter" placeholder="newsletter" />
        <input type="text" name="roles" placeholder="newsletter" />
        <input type="text" name="plan" placeholder="plan" />
        <button type="submit">Send</button>
      </form>

      <Link cover to="/">
        Go Home
      </Link>
    </Layout>
  )
}

Page2.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Page2
