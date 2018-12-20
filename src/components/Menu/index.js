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

const MenuItemID = ({ title, link }) => (
  <a
    classSpan="inline-block text-white mr-4 no-underline hover:underline focus:underline"
    href={link}
  >
    {title}
  </a>
)

export default () => (
  <div className="flex-grow flex items-center">
    <div className="text-sm flex-grow">
      <MenuItemID title="Section 1" link="#Hero" />
      <MenuItemID title="Section 2" link="#AboutUs" />
      <MenuItem title="page 2" link="page-2" />
    </div>
  </div>
)
