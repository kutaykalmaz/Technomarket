import React, { useState } from 'react'
import Dropdown from './Dropdown'
import {
  NavbarWrapper, NavbarLogo, NavMenu, NavItem,
  NavLinks, Logo, 
  NavbarContent, ButtonWrapper, Button,
  MenuIcon, FaBarsStyled, FaCaretDownStyled
} from './Navbar.elements'
import LogoImage from '../../../assets/navbarLogowhite.png'


interface Props {
  toggle: () => void;
}


const NavBar = ({ toggle }: Props) => {

  const [dropdown, setDropdown] = useState(false);


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
        <MenuIcon onClick={toggle}>
          <FaBarsStyled />
        </MenuIcon>
        <NavMenu>
          <NavItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLinks to='#'>
              Yönetim <FaCaretDownStyled />
            </NavLinks>
            {dropdown &&
              <Dropdown />
            }
          </NavItem>
          <NavItem>
            <NavLinks to='/contact-us'>
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
