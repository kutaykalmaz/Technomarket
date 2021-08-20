import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';
import LoadingComponent from '../../../app/common/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import AdminProductEditForm from './AdminProductEditForm'

const AdminProductEdit = () => {

    const { productStore } = useStore()
    const { selectedProduct: product,
        loadProduct, loadingInitial, resetSelectedProduct } = productStore
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadProduct(id);
        return () => resetSelectedProduct();
    }, [id, loadProduct, resetSelectedProduct]);

    if (loadingInitial) return (
        <LoadingComponent loading={loadingInitial} />
    )

    const panes = [
        { menuItem: 'Ürün Bilgileri', render: () => <Tab.Pane>{product && <AdminProductEditForm product={product} />}</Tab.Pane> },
        { menuItem: 'Ürün Fotoğrafları', render: () => <Tab.Pane>Ürün Fotoğrafları</Tab.Pane> },
        { menuItem: 'Ürün Yorumları', render: () => <Tab.Pane>Ürün Yorumları</Tab.Pane> },
    ]


    return (

        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
        />
    )
}

export default observer(AdminProductEdit)
