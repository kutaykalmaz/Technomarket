import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, Image, List, Segment } from 'semantic-ui-react'

const styleCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const styleRight = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
}




const Footer = () => {
    return (
        <Segment inverted padded='very' style={{ marginTop: '50px' }}>
            <Container>
                <Grid>
                    <Grid.Row style={{ paddingBottom: '50px', borderBottom: '1px solid #3f3f3f' }}>
                        <Grid.Column width='3' textAlign='center'>
                            <Image as={Link} to='/' src='/assets/logo.png' style={{ width: '60px', height: 'auto' }} />
                        </Grid.Column>
                        <Grid.Column width='9' style={styleCenter}>
                            <List horizontal relaxed>
                                <List.Item>
                                    <List.Content>
                                        <Link to='/'>ANASAYFA</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link to='#'>ÜRÜNLER</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link to='#'>SİPARİŞLERİM</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link to='#'>KAYIT</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link to='#'>GİRİŞ</Link>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width='3' style={styleRight}>
                            <div>
                                <Button circular color='facebook' icon='facebook' size='mini' />
                                <Button circular color='twitter' icon='twitter' size='mini' />
                                <Button circular color='linkedin' icon='linkedin' size='mini' />
                                <Button circular color='google plus' icon='google plus' size='mini' />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '30px' }}>
                        <Grid.Column width='16' textAlign='center'>
                            Copyright © {new Date().getFullYear()} Technomarket.com, Her hakkı saklıdır.
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default Footer
