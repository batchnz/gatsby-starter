import React from 'react'
import Link from '../TransitionLink'

const MenuItem = ({ title, link, sectionID }) =>
  sectionID ? (
    <a
      className="inline-block mr-4 no-underline hover:underline focus:underline"
      href={sectionID}
    >
      {title}
    </a>
  ) : (
    <Link
      classSpan="inline-block mr-4 no-underline hover:underline focus:underline"
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
      {/* <MenuItem title="Section 1" sectionID="#Hero" /> */}
      {/* <MenuItem title="Section 2" sectionID="#AboutUs" /> */}
      <MenuItem title="Page 2" link="page-2" />
    </div>
  </div>
)
