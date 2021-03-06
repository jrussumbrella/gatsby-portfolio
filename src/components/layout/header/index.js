import React, { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import HamburgerIcon from '../../icons/hamburger'
import DesktopMenu from '../desktop-menu'
import MobileMenu from '../mobile-menu'
import logo from '../../../images/site-logo.png'
import { Header, Overlay } from './styled'

export default () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [isOpenSideNav, setIsOpenSideNav] = useState(false)
  const sidebarRef = useRef()

  const checkScrollTop = () => {
    if (!isScrolling && window.pageYOffset > 100) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  const handleCloseSideNav = () => {
    document.body.classList.remove('lock')
    setIsOpenSideNav(false)
  }

  const handleOpenSideNav = () => {
    document.body.classList.add('lock')
    setIsOpenSideNav(true)
  }

  return (
    <Header showShadow={isScrolling}>
      <div className="wrapper">
        <div>
          <ScrollLink
            smooth={true}
            offset={0}
            duration={500}
            to="home"
            href="#home"
          >
            <img src={logo} className="site-logo" alt="site-logo" />
          </ScrollLink>
        </div>
        <div className="spacer"></div>
        <button
          onClick={handleOpenSideNav}
          className={`btn-icon mobile-icon-menu`}
        >
          <HamburgerIcon />
        </button>
        <DesktopMenu />
        <MobileMenu isOpen={isOpenSideNav} onClose={handleCloseSideNav} />
      </div>

      {isOpenSideNav && (
        <Overlay onClick={handleCloseSideNav} ref={sidebarRef} />
      )}
    </Header>
  )
}
