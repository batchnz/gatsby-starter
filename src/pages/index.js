import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = ({ location }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="This is the Home description"
        location={location}
      />
      <h1 className="text-4xl leading-tight mb-4">Home</h1>
      <div className="rte">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta
          esse, ullam nisi voluptate iste numquam dolor totam repellat.
          Doloribus, corporis iusto unde vitae deserunt qui! Sed vero possimus
          accusantium deleniti iusto. Tempore dolorum odio cupiditate quam
          voluptatibus atque nostrum exercitationem culpa tenetur magnam laborum
          iste provident beatae aspernatur, labore, deleniti iure quisquam a!
          Corrupti ea quos voluptate cumque. Libero harum adipisci, ipsam in
          dolores omnis explicabo sit, necessitatibus veritatis provident modi
          deleniti ea beatae quod impedit. Itaque ducimus illo, quidem optio
          quos officiis omnis labore similique corporis nihil temporibus iste
          animi earum quae expedita maiores eveniet adipisci quod fugiat?
        </p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
