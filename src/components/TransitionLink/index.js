import React from 'react'
import PropTypes from 'prop-types'
import Cover from './Cover'
import TransitionLink from 'gatsby-plugin-transition-link'

export default function Link(allProps) {
  const { wrapperClass, ...props } = allProps
  return (
    <>
      {props.cover && (
        <Cover {...props}>
          <span className={wrapperClass}>{props.children}</span>
        </Cover>
      )}

      {!props.cover && (
        <TransitionLink to={props.to}>
          <span className={wrapperClass}>{props.children}</span>
        </TransitionLink>
      )}
    </>
  )
}

Link.propTypes = {
  wrapperClass: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
