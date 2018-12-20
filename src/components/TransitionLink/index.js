import React from 'react'
import PropTypes from 'prop-types'
import Cover from './Cover'
import TransitionLink from 'gatsby-plugin-transition-link'

export default function Link(props) {
  return (
    <>
      {props.cover && (
        <Cover {...props}>
          <span className={props.classSpan}>{props.children}</span>
        </Cover>
      )}

      {!props.cover && (
        <TransitionLink to={props.to}>
          <span className={props.classSpan}>{props.children}</span>
        </TransitionLink>
      )}
    </>
  )
}

Link.propTypes = {
  classSpan: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
