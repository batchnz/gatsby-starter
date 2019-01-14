import React from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const DefaultForm = ({ values, isSubmitting }) => (
  <Form className="border p-2 max-w-xs">
    <div>
      <Field
        type="text"
        name="name"
        placeholder="Name"
        className="border p-2 mb-2"
      />
    </div>
    <div>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 mb-2"
      />
    </div>
    <div>
      <span className="mr-2">
        <Field
          type="checkbox"
          name="newsletter"
          checked={values.newsletter}
          className="border b-2 mr-2 mb-2"
        />
        I agree!
      </span>
      <span>
        <Field component="select" name="plan" className="border p-2">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </span>
    </div>
    <div>
      <Field
        component="textarea"
        name="message"
        placeholder="leave a message"
        className="border p-2 mb-2"
      />
    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="mt-5 bg-purple-light hover:bg-purple text-white font-bold py-3 px-5 rounded w-full"
    >
      Submit
    </button>
  </Form>
)

const FormikForm = withFormik({
  mapPropsToValues: values => ({
    name: values.name || '',
    email: values.email || '',
    newsletter: values.newsletter || false,
    plan: values.plan || 'free',
    message: values.message || '',
  }),
  handleSubmit: (form, { resetForm, setErrors, setSubmitting }) => {
    axios
      .post(
        // URL
        '?no-cache=1',
        // Data
        encode({
          'form-name': 'contact',
          ...form,
        }),
        // Header
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then(() => {
        alert('Success')
        resetForm()
      })
      .catch(error => {
        alert(error)
        setErrors(error)
      })
      .finally(() => {
        setSubmitting(false)
      })
  },
})(DefaultForm)

export default FormikForm
