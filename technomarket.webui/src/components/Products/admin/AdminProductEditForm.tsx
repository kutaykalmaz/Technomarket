import { Formik, Form } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import * as Yup from 'yup';
import { EditProductFormValues, Product } from '../../../app/models/product'

interface Props {
    product: Product
}

const AdminProductEditForm = ({ product }: Props) => {

    const handleSubmit = (values: EditProductFormValues) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={new EditProductFormValues(product)}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={Yup.object({
                name: Yup.string().required('Ürün adı zorunlu bir alandır.'),
                price: Yup.number().required('Ürün fiyatı zorunlu bir alandır.'),
                quantity: Yup.number().required('Ürün adeti zorunlu bir alandır.'),
                description: Yup.string().required('Ürün açıklaması zorunlu bir alandır.'),
                categoryId: Yup.string().required('Kategori zorunlu bir alandır.'),
                subCategoryId: Yup.string().required('Alt kategori zorunlu bir alandır.'),

            })}
        >
            {({ handleSubmit, isValid, dirty }) => {
                <Form autoComplete='off' onSubmit={handleSubmit}>
                    
                </Form>
            }}

        </Formik>
    )
}

export default observer(AdminProductEditForm)
