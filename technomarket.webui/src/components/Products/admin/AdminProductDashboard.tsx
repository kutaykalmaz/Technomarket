import { Avatar, Checkbox, IconButton } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import LoadingComponent from '../../../app/common/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

const AdminProductDashboard = () => {

    const { productStore } = useStore()
    const { loadingInitial, loadProducts, products, resetProducts } = productStore
    const history = useHistory();

    const handleClickToGoDetails = (id: string) => {
        history.push(`/products/${id}`);
    }

    const handleClickToGoEdit = (id: string) => {
        history.push(`/admin/products/${id}`)
    }



    const linkStyle = {
        color: '#4183c4',
        cursor: 'pointer'
    }

    useEffect(() => {
        loadProducts()
        return (() => resetProducts())
    }, [loadProducts, resetProducts])

    if (loadingInitial) return (<LoadingComponent loading={loadingInitial} />)

    return (
        <Table celled striped structured basic='very' collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                    <Table.HeaderCell>Ürün Fiyatı(₺)</Table.HeaderCell>
                    <Table.HeaderCell>Ürün Adeti</Table.HeaderCell>
                    <Table.HeaderCell>Onaylı</Table.HeaderCell>
                    <Table.HeaderCell>Anasayfa</Table.HeaderCell>
                    <Table.HeaderCell>Kategori</Table.HeaderCell>
                    <Table.HeaderCell>İşlemler</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {products.map((product) => (
                    <Table.Row key={product.id}>
                        <Table.Cell>
                            <Avatar src={product.photos[0].url} variant="square" />
                        </Table.Cell>
                        <Table.Cell width='6'>
                            <span style={linkStyle} onClick={() => handleClickToGoDetails(product.id)}>{product.name}</span>
                        </Table.Cell>
                        <Table.Cell>{product.price}</Table.Cell>
                        <Table.Cell>{product.quantity}</Table.Cell>
                        <Table.Cell><Checkbox readOnly checked={product.isApproved} /></Table.Cell>
                        <Table.Cell><Checkbox readOnly checked={product.isHome} /></Table.Cell>
                        <Table.Cell>{product.category} / {product.subCategory}</Table.Cell>
                        <Table.Cell>
                            <IconButton aria-label="edit" size='small' onClick={() => handleClickToGoEdit(product.id)}>
                                <EditIcon color='primary' />
                            </IconButton>

                            <IconButton aria-label="delete" size='small'>
                                <DeleteIcon color='secondary' />
                            </IconButton>
                        </Table.Cell>
                    </Table.Row>
                ))}

            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default observer(AdminProductDashboard)
