import React from 'react'
import {
  FooterWrapper, FooterContent, LogoSection,
  Logo, NavigateSection, SocialSection, NavigateLink, BottomSection
} from './Footer.elements'
import TechomarketLogo from '../../../assets/logo.png'
import { Button } from 'semantic-ui-react'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <Logo src={TechomarketLogo}></Logo>
        </LogoSection>
        <NavigateSection>
          <NavigateLink to='/'>Anasayfa</NavigateLink>
          <NavigateLink to='/products'>Ürünler</NavigateLink>
          <NavigateLink to='/order'>Siparişlerim</NavigateLink>
          <NavigateLink to='/signup'>Kayıt</NavigateLink>
          <NavigateLink to='/login'>Giriş</NavigateLink>
        </NavigateSection>
        <SocialSection>
          <Button circular color='facebook' icon='facebook' />
          <Button circular color='twitter' icon='twitter' />
          <Button circular color='linkedin' icon='linkedin' />
          <Button circular color='google plus' icon='google plus' />
        </SocialSection>
      </FooterContent>
      <BottomSection>
        Copyright © {new Date().getFullYear()} Technomarket.com, Her hakkı saklıdır.
      </BottomSection>
    </FooterWrapper>
  )
}

export default Footer

