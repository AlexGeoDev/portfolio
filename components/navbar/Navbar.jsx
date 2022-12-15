import React, { useState } from 'react'
import Link from 'next/link'
import NavItem from './NavItem'

const MENU_LIST = [
  {
    text: "Home",
    href:"/"
  },
  {
    text: "Projects",
    href: "#projects-section"
  },
  {
    text: "About",
    href:"#about-section"
  },
  
  {
    text: "Contact",
    href:"#contact-section"
  }
]

const Navbar = () => {

  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <header>
        <nav className='nav'>
          <Link 
            className='logo'
            onClick={() => setActiveIdx(0)}
            href="/">
            <h1>AlexGeodev</h1>
          </Link>

          <div 
            onClick={() => setNavActive(!navActive)}
            className='nav__menu-bar'>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${navActive ? "active" : ""}
            nav__menu-list
          `}>
            {MENU_LIST.map((menu, idx) => {
              return (
                <div 
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false); 
                  }}
                  key={menu.text}>
                  <NavItem 
                    active={activeIdx === idx}
                    {...menu} />
                </div>
              )})
            }
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar;