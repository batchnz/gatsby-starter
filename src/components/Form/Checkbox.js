import React from 'react'
import { Field } from 'formik'

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label className="mr-4">
          <input
            className="mr-2"
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  value => value !== props.value
                )
                form.setFieldValue(props.name, nextValue)
              } else {
                const nextValue = field.value.concat(props.value)
                form.setFieldValue(props.name, nextValue)
              }
            }}
          />
          {props.label}
        </label>
      )}
    </Field>
  )
}

export default Checkbox
