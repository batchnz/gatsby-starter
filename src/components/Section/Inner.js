/** Project inner wrapper to define global width */

import React from 'react'

export default ({ children, className, styles }) => (
  <div
    className={`max-w-xl mx-auto px-4 py-5 ${className ? className : ''}`}
    style={styles && styles}
  >
    {children}
  </div>
)
