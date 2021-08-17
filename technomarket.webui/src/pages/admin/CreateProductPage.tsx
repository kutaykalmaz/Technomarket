import { observer } from 'mobx-react-lite'
import React from 'react'
import { Grid } from 'semantic-ui-react'
// import CreateProductForm from '../../components/Products/form/CreateProductForm'
import MultiStepCreateProductForm from '../../components/Products/form/MultiStepCreateProductForm'

const CreateProductPage = () => {
    return (
        <Grid style={{marginTop:'50px'}}>
            <Grid.Column width='10'>
                <MultiStepCreateProductForm />
            </Grid.Column>
            <Grid.Column width='6'>
                <img src="/assets/unDraw/createProduct.svg" alt="" style={{width:'300px'}}/>
            </Grid.Column>
        </Grid>
    )
}

export default observer(CreateProductPage)
