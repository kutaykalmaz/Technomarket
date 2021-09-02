import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'

export const NavbarContent = styled.div`
  width: 100%;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  
`

export const NavbarWrapper = styled.nav`
  height: 80px;
  font-size: 1.4rem;
  width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`



export const NavbarLogo = styled(LinkR)`
  cursor: pointer;

`

export const Logo = styled.img`
  width: 300px;
  height: auto;
`


export const FaCaretDownStyled = styled(FaCaretDown)`
`

export const NavMenu = styled.ul`
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  text-align: center;
  justify-self: end;
  grid-gap: 20px;
  
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`

export const NavLinks = styled(LinkR)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    color: white;
    transition: all 0.2s ease-out;
  }


`

export const ButtonWrapper = styled(LinkR)`
  align-self: center;
  

`

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 18px;
  color: #fff;
  background-color: #1888ff;
  margin-left: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: #fff;
    border: 1px solid #1888ff;
  }
`

