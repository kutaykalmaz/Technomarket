import { observer } from 'mobx-react-lite'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import MultiStepCreateProductForm from '../../components/Products/form/MultiStepCreateProductForm'
import { Header, Icon } from 'semantic-ui-react'


const CreateProductPage = () => {
    return (
        <Grid>
            <Grid.Row>
                <Header as='h3' textAlign='center' icon style={{color:'#3f51b5'}}>
                    <Icon name='box' />
                    <Header.Content>Ürün Oluştur</Header.Content>
                </Header>
            </Grid.Row>
            <Grid.Column width='10'>
                <MultiStepCreateProductForm />
            </Grid.Column>
            <Grid.Column width='6' textAlign='center'>
                <img src="/assets/unDraw/createProduct.svg" alt="" style={{ width: '100%' }} />
            </Grid.Column>
        </Grid>
    )
}

export default observer(CreateProductPage)
