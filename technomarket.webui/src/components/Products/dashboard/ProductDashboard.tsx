import { observer } from 'mobx-react-lite'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProductList from './ProductList'
// import CategoryList from './CategoryList'

const ProductDashboard = () => {
    return (
        <Grid style={{marginTop:'30px'}}>
            <Grid.Column width='4'>
                {/* <CategoryList /> */}
            </Grid.Column>

            <Grid.Column width='12'>
                <ProductList />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ProductDashboard)
