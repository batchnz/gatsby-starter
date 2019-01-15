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
  <Form className="max-w-xs mb-8">
    {/* Error Message */}
    {errors.submit && <div className="text-red mb-2">{errors.submit}</div>}
    {/* Success Message */}
    {status && status.success && (
      <div className="text-green mb-2">Form submitted successfully</div>
    )}
    <div className="mb-4">
      <Field
        type="text"
        name="name"
        placeholder="Name"
        className="border p-2"
        required
      />
    </div>
    <div className="mb-4">
      <Field
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2"
      />
    </div>
    <div className="mb-4">
      <Checkbox name="roles" value="admin" label="Admin" />
      <Checkbox name="roles" value="customer" label="Customer" />
    </div>
    <div className="mb-4">
      <Field
        type="checkbox"
        id="newsletter"
        name="newsletter"
        checked={values.newsletter}
        className="mr-2"
      />
      <label htmlFor="newsletter">
        Yes, I wish to sign up to our newsletter
      </label>
    </div>
    <div className="mb-4">
      <Field component="select" name="plan" className="border p-2">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
    </div>
    <div className="mb-4">
      <Field
        component="textarea"
        name="message"
        placeholder="Leave a message"
        className="border p-2"
      />
    </div>
    <div className="mb-4">
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-purple-light hover:bg-purple text-white font-bold py-3 px-5 rounded w-full"
      >
        Submit
      </button>
    </div>

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
