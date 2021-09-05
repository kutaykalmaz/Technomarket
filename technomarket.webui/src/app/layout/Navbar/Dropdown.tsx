import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { DropdownWrapper, DropdownItem, DropdownLink } from './Dropdown.elements'

interface Props {
  sidebar?: boolean;
}

const Dropdown = ({ sidebar }: Props) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropdownWrapper onClick={handleClick} click={click} sidebar={sidebar}>
      {MenuItems.map((item, index) => {
        return (
          <DropdownItem key={index}>
            <DropdownLink to={item.path} onClick={() => setClick(false)}>
              {item.title}
            </DropdownLink>
          </DropdownItem>
        )
      })}
    </DropdownWrapper>
  )
}

export default Dropdown
