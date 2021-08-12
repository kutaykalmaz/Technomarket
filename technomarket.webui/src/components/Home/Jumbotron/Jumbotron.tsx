import React from 'react'
import { Segment, Grid, Header, Button } from 'semantic-ui-react'
import './Jumbotron.css';

const Jumbotron = () => {
    return (
        <Segment inverted padded='very'>
            <Grid>
                <Grid.Row centered columns={16}>
                    <Header content='Techno Market' color='grey' inverted size='large'/>
                    <Header as='h3' color='grey' inverted>
                        Avantajlı fiyatlarla size uygun ürünleri keşfetmeye hemen başlayın.
                    </Header>
                    <Button content='Kayıt Ol' inverted icon='right arrow' labelPosition='right'/>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default Jumbotron
