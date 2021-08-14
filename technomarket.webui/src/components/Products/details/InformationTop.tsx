import React from 'react'
import { Grid, Label, Rating } from 'semantic-ui-react'
import { Product } from '../../../app/models/product'

interface Props {
    product: Product
}

const InformationTop = ({ product }: Props) => {
    return (
        <>
            <Grid.Row style={{ float: 'left' }}>
                <div className='oldPrice'>
                    {product.price + " ₺"}
                </div>
                <span className='newPrice'>{(Math.floor(product.price - product.price * 10 / 100)) + " ₺"}</span>
                <Label color='red' tag>
                    %10 indirim
                </Label>
                <span style={{ display: 'block', marginTop: '15px' }}>{(Math.floor((product.price - product.price * 10 / 100) / 12)) + " ₺ x 12 ay'a varan Alışveriş Kredisi seçenekleri "}</span>
            </Grid.Row>
            <Grid.Row style={{ float: 'right' }}>
                <span style={{ fontSize: '20px', marginRight: '10px' }}>4.0</span>
                <Rating icon='star' defaultRating={4} maxRating={5} size='mini' />
                <span style={{ fontSize: '12px', display: 'block' }}>25 Değerlendirme</span>
            </Grid.Row>
        </>
    )
}

export default InformationTop
