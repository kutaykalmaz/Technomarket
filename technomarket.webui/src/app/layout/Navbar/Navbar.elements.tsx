import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { FaTimes, FaBars, FaCaretDown } from 'react-icons/fa'


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



export const NavMenu = styled.ul`
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  text-align: center;
  justify-self: end;
  grid-gap: 20px;

  @media screen and (max-width: 1200px) { 
    display: none
  }
  
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`

export const NavLinks = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: all 0.3s ease-in;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: #005fc5;
    color: #fff;
  }
`

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) { 
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`

export const FaCaretDownStyled = styled(FaCaretDown)`
  margin-left: 5px;
`
  

export const FaBarsStyled = styled(FaBars)`
  color: #fff;
  font-size: 2rem;

`