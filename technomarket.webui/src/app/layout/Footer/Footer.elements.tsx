import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'


export const FooterWrapper = styled.footer`
  height: 325px;
  background-color: rgb(8,8,8);
  margin-top: 50px;
  
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 50px;
  width: 1120px;
  margin: 0 auto;
  align-items: center;
  height: 90%;
`

export const LogoSection = styled.div`
  justify-self: flex-start;
`

export const Logo = styled.img`
  width: 175px;
  height: auto;
`

export const NavigateLink = styled(LinkR)`
  color: #eaeaea;
  transition: all 0.3s ease-out;
  font-size: 20px;

  &:hover {
    transition: all 0.3s ease-out;
    color: #1888ff;
  }
`

export const NavigateSection = styled.div`
  color: #eaeaea;
  justify-self: center;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;
`

export const SocialSection = styled.div`
  color: #eaeaea;
  justify-self: flex-end;
`

export const BottomSection = styled.div`
  text-align: center;
  color: #eaeaea;
`
