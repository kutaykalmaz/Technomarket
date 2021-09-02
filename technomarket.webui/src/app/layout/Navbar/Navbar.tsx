import React, { useState } from 'react'
import Dropdown from './Dropdown'
import {
  NavbarWrapper, NavbarLogo, NavMenu, NavItem,
  NavLinks, FaCaretDownStyled, Logo, NavbarContent, ButtonWrapper, Button
} from './Navbar.elements'
import LogoImage from '../../../assets/navbarLogowhite.png'


const NavBar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <NavbarContent>
      <NavbarWrapper>
        <NavbarLogo to='/'>
          <Logo src={LogoImage} />
        </NavbarLogo>
        <NavMenu>
          <NavItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLinks to='/services' onClick={closeMobileMenu}>
              İşlemler <FaCaretDownStyled />
            </NavLinks>
            {dropdown &&
              <Dropdown />
            }
          </NavItem>
          <NavItem>
            <NavLinks to='/contact-us' onClick={closeMobileMenu}>
              İletişim
            </NavLinks>
          </NavItem>
          <ButtonWrapper to='/login'>
            <Button>Giriş yap</Button>
          </ButtonWrapper>
        </NavMenu>
      </NavbarWrapper>
    </NavbarContent>
  )
}

export default NavBar
