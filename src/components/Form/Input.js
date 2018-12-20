import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  type,
  name,
  label,
  value,
  placeholder,
  required,
  onChange,
}) => (
  <div className="mb-4">
    <label htmlFor={`id_${name}`} className="block mb-2">
      {label}{' '}
    </label>
    <input
      type={type ? type : 'text'}
      id={`id_${name}`}
      name={name}
      placeholder={placeholder && placeholder}
      required={required && required}
      className="border p-2"
      value={value}
      onChange={onChange}
    />
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Input
