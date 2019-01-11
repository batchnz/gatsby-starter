import React from 'react'
import Link from '../TransitionLink'

const MenuItem = ({ title, link }) => (
  <Link
    classSpan="inline-block text-white mr-4 no-underline hover:underline focus:underline"
    cover
    direction="right"
    to={link}
  >
    {title}
  </Link>
)

export default () => (
  <div className="flex-grow flex items-center">
    <div className="text-sm flex-grow">
      <MenuItem title="Page 1" link="/" />
      <MenuItem title="Page 2" link="/page-2" />
    </div>
  </div>
)
