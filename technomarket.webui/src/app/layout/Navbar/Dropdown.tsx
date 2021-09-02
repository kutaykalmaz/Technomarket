import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { DropdownWrapper, DropdownItem, DropdownLink } from './Dropdown.elements'

const Dropdown = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropdownWrapper onClick={handleClick} click={click}>
      { MenuItems.map((item, index) => {
        return (
          <DropdownItem key={index}>
            <DropdownLink to={item.path} onClick={() => setClick(false)}>
              {item.title}
            </DropdownLink>
          </DropdownItem>
        )
      }) }
    </DropdownWrapper>
  )
}

export default Dropdown
