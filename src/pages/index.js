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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum
          id voluptatibus labore. Adipisci recusandae dicta ullam illo doloribus
          facere. Officiis illum eius esse beatae, harum repudiandae cum maxime
          commodi alias veritatis in minus aperiam explicabo deserunt aliquid
          recusandae? Quae enim eum ratione cumque dolorem cum. Quidem autem
          provident mollitia amet fuga repellendus placeat numquam laboriosam
          earum qui tempore similique atque tempora voluptatem deserunt eum
          voluptates eaque dignissimos, laudantium quas, aperiam impedit ab quo
          vel? Est cumque ducimus perferendis quia ipsa praesentium et neque
          quas esse? Unde, quibusdam illo optio nisi harum temporibus ea magnam
          laudantium. Nulla expedita, a, voluptates non magni quisquam quia odio
          nemo omnis odit officia dignissimos minima et adipisci! Nihil
          exercitationem sapiente odio sed incidunt omnis recusandae accusantium
          labore deserunt aspernatur esse libero illo minima eum, temporibus
          accusamus mollitia. In, molestias? Architecto ex recusandae hic
          accusamus necessitatibus harum corrupti fuga, nemo, aspernatur
          mollitia illum deserunt velit doloremque, doloribus ipsam. Animi,
          laudantium ut! Dolorem tenetur deleniti numquam. Reiciendis rerum
          vero, ratione voluptatem praesentium nesciunt asperiores! Debitis sit
          quae, doloribus accusantium modi similique provident vel nihil magnam
          consequuntur error obcaecati nam ratione facilis aperiam libero
          officiis autem temporibus dolorum ea praesentium necessitatibus!
          Deleniti temporibus ullam id ab quos ratione, sunt mollitia tenetur
          nobis reprehenderit explicabo expedita tempore suscipit sed
          perspiciatis hic veritatis voluptas. Pariatur laudantium hic sapiente
          consequatur atque accusamus quisquam at, nemo veniam eius voluptas aut
          mollitia aliquid dolorem neque qui quasi quaerat. Accusantium omnis
          similique ea perspiciatis reprehenderit. Nemo doloribus consectetur
          eveniet ut molestiae dicta voluptatibus veritatis a quae saepe,
          aliquid nesciunt debitis dolores? Sit error vero veritatis dignissimos
          praesentium dolore nobis doloribus blanditiis tempora quidem et ipsum
          accusantium saepe voluptas eius, sed inventore delectus modi
          architecto. Architecto quam, accusamus rem sapiente veritatis cumque
          officia, deleniti dolor, id facilis doloribus eum similique autem
          eligendi vitae beatae impedit necessitatibus qui neque facere
          distinctio! Tempora explicabo recusandae neque tenetur deleniti
          necessitatibus reprehenderit cumque veniam nisi harum deserunt
          nesciunt officiis quam fuga voluptatibus ducimus error quibusdam
          libero laudantium culpa omnis earum, nulla ipsam? Iste tempore,
          minima, facilis incidunt earum ipsam similique adipisci fuga voluptate
          atque praesentium ipsum veniam quisquam deleniti beatae consequuntur
          accusamus voluptatibus dicta ratione dolore quas placeat. Eius eaque
          inventore quos, incidunt atque molestias dignissimos laudantium
          voluptates beatae assumenda placeat provident, molestiae facere totam
          quibusdam veniam. Modi, animi illum harum fugit ex incidunt, quod
          distinctio non nam cumque, doloremque nesciunt quam possimus cum
          aperiam? Accusantium asperiores dolorem alias similique atque ea vitae
          quod recusandae neque magni, nostrum magnam esse commodi quae eos
          eveniet explicabo expedita fugiat soluta consequatur pariatur. Quis
          non ab recusandae temporibus, quaerat saepe! Quis ratione nemo facilis
          consequatur. Modi vel atque illum consectetur nobis id optio rerum
          itaque vero. Repellat, fugit? Aperiam sequi repudiandae, esse tempora
          exercitationem voluptas tenetur hic ducimus error illo. Porro
          laudantium placeat exercitationem voluptas hic quasi doloribus dolorum
          sit adipisci iusto ipsa earum voluptatibus sed eligendi dicta,
          mollitia delectus? Quos nulla fugit, distinctio libero voluptatem vero
          nemo consequuntur optio, ducimus neque reprehenderit harum earum
          temporibus ipsam error eius laudantium sapiente.
        </p>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
