import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import LoadingComponent from './LoadingComponent'
import DetailsNavigation from './DetailsNavigation'
import ImageSlider from './slider/ImageSlider'
import ProductInformations from './ProductInformations'
import TabSection from './TabSection'

const ProductDetails = () => {

    const { productStore } = useStore()
    const { selectedProduct: product,
        loadProduct, loadingInitial, resetSelectedProduct } = productStore
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadProduct(id);
        return () => resetSelectedProduct();
    }, [id, loadProduct, resetSelectedProduct]);

    if (loadingInitial) return (
        <LoadingComponent loadingInitial={loadingInitial} />
    )

    return (
        <Grid style={{ marginTop: '20px' }}>
            <Grid.Row>
                {product &&
                    <DetailsNavigation product={product} />}
            </Grid.Row>
            <Grid.Row style={{ backgroundColor: 'white' }}>
                <Grid.Column width='8' style={{ padding: '10px', borderRight: '1px solid #eee' }}>
                    {product?.photos &&
                        <ImageSlider productPhotos={product?.photos} />}
                </Grid.Column>
                <Grid.Column width='8'>
                    {product &&
                        <ProductInformations product={product} />}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ backgroundColor: 'white', padding: '20px' }}>
                <Grid.Column width='16'>
                    {product &&
                        <TabSection product={product} />}
                </Grid.Column>

            </Grid.Row>
        </Grid>
    )
}

export default observer(ProductDetails)
