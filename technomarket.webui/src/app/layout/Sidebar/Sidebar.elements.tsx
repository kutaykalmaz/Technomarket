import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'

interface Props {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #080808;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }: Props) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }: Props) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
`

export const Icon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    cursor: pointer;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

`

export const SidebarNavigateLink = styled(LinkR)`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease-out;
      color: #005fc5;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

export const SidebarRoute = styled(LinkR)`
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

