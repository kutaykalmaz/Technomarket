import React from 'react'
import ProductDescription from './ProductDescription'
import { Product } from '../../../app/models/product'
import { Tab } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import ProductComments from './ProductComments'

interface Props {
    product: Product
}

const TabSection = ({ product }: Props) => {

    console.log(product.description)

    const panes = [
        { menuItem: 'Ürün Açıklaması', render: () =>  <ProductDescription 
            description={product.description} /> },
        { menuItem: 'Ürün Yorumları', render: () => <ProductComments /> },
        { menuItem: 'Tab 3', render: () => 'Tab 3 Content' },
    ]

    return (
        <Tab 
            panes={panes} 
        />
    )
}

export default observer(TabSection)
