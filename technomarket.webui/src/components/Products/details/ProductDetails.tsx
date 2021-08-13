import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../../app/stores/store'
import RingLoader from "react-spinners/RingLoader";
import { Grid } from 'semantic-ui-react';

const ProductDetails = () => {

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: 'calc(100vh - 60px)'
    }

    const { productStore } = useStore()
    const { selectedProduct: product,
        loadProduct, loadingInitial, resetSelectedProduct } = productStore
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadProduct(id);
        return () => resetSelectedProduct();
    }, [id, loadProduct, resetSelectedProduct]);

    if (loadingInitial) return (
        <Grid>
            <Grid.Column style={style}>
                <RingLoader color={'#1B1C1D'} loading={loadingInitial} size={60} />
            </Grid.Column>
        </Grid>
    )


    return (
        <div>
            {
                product &&
                product.name
            }
        </div>
    )
}

export default observer(ProductDetails)
