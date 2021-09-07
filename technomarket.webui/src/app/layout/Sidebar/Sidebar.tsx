import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import Dropdown from '../Navbar/Dropdown'
import {
  CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarNavigateLink,
  SideBtnWrap, SidebarRoute, SidebarDropdownWrapper
} from './Sidebar.elements'

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: Props) => {

  const [dropdown, setDropdown] = useState(false);


  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarNavigateLink to="#" onClick={() => setDropdown(!dropdown)}
          >
            Yönetim <FaCaretDown />
          </SidebarNavigateLink>
          {dropdown &&
            <SidebarDropdownWrapper>
              <Dropdown sidebar />
            </SidebarDropdownWrapper>
          }
          <SidebarNavigateLink to="/contact" onClick={toggle}>
            İletişim
          </SidebarNavigateLink>
        </SidebarMenu>
        <SideBtnWrap onClick={toggle}>
          <SidebarRoute to="/login">Giriş Yap</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
