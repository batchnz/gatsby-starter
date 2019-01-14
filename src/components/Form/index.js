import React from 'react'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'

import Checkbox from './Checkbox'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const DefaultForm = ({ values, isSubmitting, status, errors }) => (
  <Form className="border p-2 max-w-xs">
    {/* Error Message */}
    {errors.submit && <div className="text-red">{errors.submit}</div>}
    {/* Success Message */}
    {status && status.success && (
      <div className="text-green">form submitted success</div>
    )}
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
      {/* Checkbox group | Array */}
      <Checkbox name="roles" value="admin" />
      <Checkbox name="roles" value="stuff" />
      <Checkbox name="roles" value="customer" />
    </div>
    <div>
      {/* Checkbox single | Boolean */}
      <span className="mr-2">
        <Field
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={values.newsletter}
          className="border b-2 mr-2 mb-2"
        />
        <label htmlFor="newsletter">I agree!</label>
      </span>
      {/* Dropdown */}
      <span>
        <Field component="select" name="plan" className="border p-2">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </span>
    </div>
    <div>
      {/* Textarea */}
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
    <br />
    <pre>{JSON.stringify(values, null, 2)}</pre>
  </Form>
)

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
  handleSubmit: (form, { resetForm, setErrors, setStatus, setSubmitting }) => {
    const convertedFormData = {
      ...form,
      ...(form.roles &&
        !!form.roles.length && { roles: form.roles.join(', ') }),
    }
    axios
      .post(
        // URL
        '?no-cache=1',
        // Data
        encode({
          'form-name': 'contact',
          ...convertedFormData,
        }),
        // Header
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then(() => {
        console.log()
        resetForm()
        setStatus({ success: true })
      })
      .catch(error => {
        // Set errors.submit message
        setErrors({
          submit: 'There is an error to submit the form, please try again.',
        })
        // Erasing error message after 5s
        setTimeout(() => {
          setErrors({ submit: '' })
        }, 5000)
      })
      .finally(() => {
        setSubmitting(false)
      })
  },
})(DefaultForm)

export default FormikForm
