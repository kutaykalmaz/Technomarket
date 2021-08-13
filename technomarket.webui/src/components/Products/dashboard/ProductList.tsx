import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'
// import { Card } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ProductListItem from './ProductListItem'
import SkeletonProductItem from './SkeletonProductItem'

const ProductList = () => {

    const { productStore } = useStore()

    const { products, loadProducts, loadingInitial, resetProducts } = productStore

    const runCallback = (cb: any) => {
        return cb();
    };

    useEffect(() => {
        loadProducts();

        return () => resetProducts();
    }, [loadProducts, resetProducts])

    if (loadingInitial) return (
        <Grid columns={3} stackable>
            <Grid.Row centered>
                <Header as='h1'>Fırsat Ürünler</Header>
            </Grid.Row>
            {
                runCallback(() => {
                    const row = [];
                    for (let index = 0; index < 9; index++) {
                        row.push(<SkeletonProductItem key={index} />)
                        
                    }
                    return row;
                })
            }
        </Grid>

    )

    return (
        <Grid>
            <Grid.Row centered>
                <Header as='h1'>Fırsat Ürünler</Header>
            </Grid.Row>
            <Grid.Row width='16'>
                <Card.Group itemsPerRow={3}>
                    {products &&
                        products.map(product => (
                            <ProductListItem key={product.id} product={product} />
                        ))
                    }
                </Card.Group>
            </Grid.Row>
        </Grid>

    )
}

export default observer(ProductList)
