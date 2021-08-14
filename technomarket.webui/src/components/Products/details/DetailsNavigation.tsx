import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { Product } from '../../../app/models/product'

interface Props {
    product: Product
}


const DetailsNavigation = ({ product }: Props) => {
    return (
        <Breadcrumb size='tiny'>
            <Breadcrumb.Section link>Ürünler</Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section link>{product.category}</Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>{product.subCategory}</Breadcrumb.Section>
        </Breadcrumb>
    )
}

export default DetailsNavigation
