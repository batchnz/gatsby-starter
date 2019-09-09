import React from 'react'

import Link from '../TransitionLink'

const MenuItem = ({ title, link }) => (
  <Link
    wrapperClass="text-white no-underline inline-block hover:underline focus:underline mr-6"
    cover
    direction="right"
    to={link}
  >
    {title}
  </Link>
)

const Menu = () => (
  <div className="text-sm flex items-center">
    <MenuItem title="Home" link="/" />
    <MenuItem title="Page 2" link="/page-2" />
  </div>
)

export default Menu
