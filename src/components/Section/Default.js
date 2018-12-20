/*
 * This component is a opt-in component
 * It's designed for providing consistent layout
 *
 * @prop id - Required, that easy to navigate
 * @prop children - Required, react-node
 * @prop style - opt-in, extra style need to apply on the section wrapper
 * @prop imageName - opt-in, will apply the background-image of inline-style into section wrapper
 */

import React from 'react'
import PropTypes from 'prop-types'

import Inner from './Inner'

const Section = ({ id, styles, className, children }) => (
  <div
    id={id}
    className={className ? className : ''}
    style={{
      ...(styles && styles),
    }}
  >
    <Inner>{children}</Inner>
  </div>
)

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Section
