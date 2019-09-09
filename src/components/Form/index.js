import React from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'

import Checkbox from './Checkbox'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

/** constants */
const formName = 'contact'
const msgSuccess = 'Thanks, we’ll be in touch soon.'
const msgError = 'There was an error submitting the form, please try again.'

const Success = () => (
  <div className="text-green-500 mb-2">
    <p>{msgSuccess}</p>
  </div>
)

const FormWithError = ({ isSubmitting, errors, values }) => (
  <Form
    className="mb-8"
    name={formName}
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    {/* * Required by Netlify Form */}
    <input type="hidden" name="form-name" value={formName} />
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold" htmlFor="name">
        Name
      </label>
      <Field
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        className="w-full border p-2"
        required
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold" htmlFor="email">
        Email
      </label>
      <Field
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-2"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold">Roles</label>
      <Checkbox name="roles" value="admin" label="Administrator" />
      <Checkbox name="roles" value="customer" label="Customer" />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold">Plan</label>
      <Field component="select" name="plan" className="w-full border">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold" htmlFor="message">
        Message
      </label>
      <Field
        id="message"
        component="textarea"
        name="message"
        placeholder="Leave a message"
        className="w-full border p-2"
      />
    </div>
    <div className="mb-4">
      <label>
        <Field
          className="mr-2"
          type="checkbox"
          name="newsletter"
          checked={values.newsletter}
        />
        Yes, I wish to sign up to our newsletter
      </label>
    </div>
    {/* Submit Btn & Error Message */}
    <div class="mb-4">
      <button
        type="submit"
        aria-label="Send"
        disabled={isSubmitting}
        className="bg-purple-300 hover:bg-purple-500 text-white font-bold py-3 px-5 rounded w-full"
      >
        Submit
      </button>
      {/* Error Message */}
      {errors.submit && <div className="mt-4">{msgError}</div>}
    </div>
    {/* Testing, Please delete me in Production */}
    <pre>{JSON.stringify(values, null, 2)}</pre>
  </Form>
)

const DefaultForm = props => {
  const { status } = props
  if (status && status.success) {
    return <Success />
  } else {
    return <FormWithError {...props} />
  }
}

const FormikForm = withFormik({
  mapPropsToValues: values => ({
    name: values.name || '',
    email: values.email || '',
    newsletter: values.newsletter || false,
    roles: values.roles || [],
    plan: values.plan || 'free',
    message: values.message || '',
  }),
  validate: values => {
    const errors = {}
    // if (!values.firstname) errors.firstname = 'Required'
    return errors
  },
  handleSubmit: async (
    form,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    try {
      await axios.post(
        '?no-cache=1',
        encode({ 'form-name': formName, ...form }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      resetForm()
      setStatus({ success: true })
    } catch (error) {
      // Set errors.submit message
      setErrors({ submit: true })
      // Set errors.submit to TRUE
      if (error.response) {
        console.error(error.response)
      } else {
        console.error(error)
      }
      // Erasing error message after 5s
      setTimeout(() => {
        setErrors({ submit: '' })
      }, 5000)
    } finally {
      setSubmitting(false)
    }
  },
})(DefaultForm)

export default FormikForm
