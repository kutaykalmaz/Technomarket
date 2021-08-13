import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import { Product } from '../../../app/models/product'

interface Props {
    product: Product
}

const style= {
    height: '250px',
    objectFit: 'contain',
    background: '#fff'
}

function truncate(str: string | undefined) {
    if (str) {
        return str.length > 90 ? str.substring(0, 87) + '...' : str;
    }
}

const ProductListItem = ({ product }: Props) => {
    return (
        <Card as={Link} to={`/products/${product.id}`}>
            <Image src={product.photos[0].url} style={style} />
            <Card.Content>
                <Card.Header style={{fontSize:'15px', minHeight:'60px'}}>
                    {truncate(product.name)}
                </Card.Header>
                <Card.Description style={{fontSize:'20px', marginTop:'10px'}}>
                {product.price} ₺
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {product.category} / {product.subCategory}
            </Card.Content>
        </Card>
    )
}

export default observer(ProductListItem)
