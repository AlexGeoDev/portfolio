import Link from 'next/link';
import React from 'react';

const NavItem = ({href, active, text}) => {
  return (
    <Link
      href={href} 
      className={`
        nav__link ${active ? "active" : "" }
      `}>
        {text}
    </Link>
  )
}

export default NavItem;