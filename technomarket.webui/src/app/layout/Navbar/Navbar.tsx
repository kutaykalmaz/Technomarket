import React from 'react'
import { Button, Container, Dropdown, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Segment inverted style={{padding:'4px'}}>
      <Menu secondary inverted>
        <Container>
          <Menu.Item 
            content='Anasayfa'
            as={NavLink}
            exact
            to='/'            
          />
          <Dropdown text='İşlemler' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Header content='Ürünler'/>
              <Dropdown.Item
                as={NavLink}
                to='/createproduct'
              >
                Ürün Oluştur
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header content='KATEGORİLER'/> 
              <Dropdown.Item>Kategori Oluştur</Dropdown.Item>
              <Dropdown.Item>Alt Kategori Oluştur</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'>
          <Menu.Item>
            <Button inverted content='Giriş Yap' style={{padding:'10px 20px'}}/> 
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
    </Segment>
  )
}

export default NavBar
