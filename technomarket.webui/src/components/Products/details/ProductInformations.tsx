import React from 'react'
import { Button, Grid, Header, Icon, Label, Rating } from 'semantic-ui-react'
import { Product } from '../../../app/models/product'
// import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './styles/ProductInformation.css'
import AddToCart from './AddToCart'
import InformationTop from './InformationTop'
import { observer } from 'mobx-react-lite'

interface Props {
    product: Product
}


const ProductInformations = ({ product }: Props) => {
    return (
        <>
            <Header as='h3' content={product.name} />
            <Link to='#' className='categoryLink'>{product.subCategory}</Link>
            <Grid style={{ marginTop: '10px' }}>
                <Grid.Row>
                    <Grid.Column >
                        <InformationTop product={product} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width='16'>
                        <div style={{ borderTop: '1px solid #adadad' }} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <AddToCart />
                </Grid.Row>
            </Grid>
        </>
    )
}

export default observer(ProductInformations)
