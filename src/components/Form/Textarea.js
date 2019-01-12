import React from 'react'
import PropTypes from 'prop-types'

const Textarea = ({ name, label, value, placeholder, required, onChange }) => (
  <div className="mb-4">
    <label htmlFor={`id_${name}`} className="block mb-2">
      {label}{' '}
    </label>
    <textarea
      id={`id_${name}`}
      name={name}
      value={value}
      placeholder={placeholder && placeholder}
      required={required && required}
      className="border p-2"
      onChange={onChange}
    />
  </div>
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Textarea
