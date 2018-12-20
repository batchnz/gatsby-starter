import React from 'react'
import PropTypes from 'prop-types'

/*
 * Project inner wrapper to define global width
 */

export default ({ children, className, styles }) => (
  <div
    className={`max-w-xl mx-auto px-4 py-5 ${className ? className : ''}`}
    style={styles && styles}
  >
    {children}
  </div>
)
