import React from 'react'
import { Button, Container, Dropdown, Menu, Segment } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Segment inverted>
      <Menu secondary inverted>
        <Container>
          <Menu.Item 
            content='Anasayfa'
            link
            active
          />
          <Dropdown text='İşlemler' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Header content='Ürünler'/>
              <Dropdown.Item>Ürün Oluştur</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header content='KATEGORİLER'/> 
              <Dropdown.Item>Kategori Oluştur</Dropdown.Item>
              <Dropdown.Item>Alt Kategori Oluştur</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'>
          <Menu.Item>
            <Button inverted content='Giriş Yap' /> 
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    </Segment>
  )
}

export default NavBar
