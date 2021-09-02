import React, { useEffect, useState } from 'react'
import { Box, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik'
import { observer } from 'mobx-react-lite'
import * as Yup from 'yup';
import { EditProductFormValues, Product } from '../../../app/models/product'
import { useStore } from '../../../app/stores/store';
import VerticalLinearStepper, { VerticalLinearStep } from './VerticalLinearStepper/VerticalLinearStepper'
import { CheckboxWithLabel } from 'formik-material-ui';
import RelatedSelectInput from '../../../app/common/form/RelatedSelectInput';
import SelectInput from '../../../app/common/form/SelectInput'

interface Props {
    product: EditProductFormValues
}

const AdminProductEditForm = ({ product }: Props) => {

    const { categoryStore, subCategoryStore } = useStore();
    const { loadCategoryOptions, categoryOptions, resetCategoriesOptions } = categoryStore;
    const { loadSubCategoryOptions, relatedSubCategories, relatedSubCategoriesOptions, resetSubCategoriesOptions } = subCategoryStore
    const [categoryState, setCategoryState] = useState(product.categoryId)


    useEffect(() => {
        loadCategoryOptions();
        loadSubCategoryOptions();
        relatedSubCategories(product.categoryId)
        return (() => {
            resetCategoriesOptions();
            resetSubCategoriesOptions();
        })
    }, [loadCategoryOptions, loadSubCategoryOptions, resetCategoriesOptions, resetSubCategoriesOptions])

    const changeSubCategories = (e: string) => {
        relatedSubCategories(e);
    }


    const handleSubmit = (values: FormikValues) => {
        console.log(values)
    }


    return (
        <VerticalLinearStepper
            initialValues={product}
            onSubmit={(values) => handleSubmit(values)}
        >
            <VerticalLinearStep
                validationSchema={Yup.object({
                    name: Yup.string().required('Ürün adı zorunlu alandır.'),
                    price: Yup.number().required('Ürün fiyatı zorunlu alandır.'),
                    quantity: Yup.number().required('Ürün miktarı zorunlu alandır.'),
                    description: Yup.string().required('Ürün açıklaması zorunlu alandır.')
                })}
                label='Ürün Bilgileri'
            >
                <Box paddingBottom={2}>
                    <Field name='name' label='Ürün Adı' as={TextField} variant="outlined" fullWidth margin="dense"></Field>
                </Box>
                <Box paddingBottom={2}>
                    <Field name='price' label='Ürün Fiyatı' type='number' as={TextField} variant="outlined" fullWidth margin="dense"></Field>
                </Box>
                <Box paddingBottom={2}>
                    <Field name='quantity' label='Ürün Adeti' type='number' as={TextField} variant="outlined" fullWidth margin="dense"></Field>
                </Box>
                <Box paddingBottom={2}>
                    <Field name='description' multiline minRows={4} maxRows={4} label='Ürün Açıklaması' as={TextField} variant="outlined" fullWidth margin="dense"></Field>
                </Box>
            </VerticalLinearStep>

            <VerticalLinearStep label='Kategori ve Sınıflandırma'
                validationSchema={Yup.object({
                    categoryId: Yup.string().required('Kategori zorunlu alandır.'),
                    subCategoryId: Yup.string().required('Alt kategori zorunlu alandır.')
                })}
            >

                <Box paddingBottom={2}>
                    {/* <RelatedSelectInput placeholder='Kategori' name='categoryId' label='Kategori' options={categoryOptions} function={changeSubCategories} /> */}
                    <Field name='categoryId' value={categoryState} select label='Kategori' as={TextField} variant="outlined" fullWidth margin="dense" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        changeSubCategories(e.target.value)
                        setCategoryState(e.target.value)
                    }}>
                        {categoryOptions.map((value) => (
                            <MenuItem value={value.value}>{value.text}</MenuItem>
                        ))}
                    </Field>
                </Box>

                <Box paddingBottom={2}>
                    {/* <SelectInput placeholder='Alt Kategori' name='subCategoryId' label='Alt Kategori' options={relatedSubCategoriesOptions} disabled={relatedSubCategoriesOptions.length === 0} /> */}
                    <Field name='subCategoryId' select label='Alt Kategori' as={TextField} variant="outlined" fullWidth margin="dense">
                        {relatedSubCategoriesOptions.map((value) => (
                            <MenuItem value={value.value}>{value.text}</MenuItem>
                        ))}
                    </Field>
                </Box>

                {/* <Box paddingBottom={2}>
                    <Field name='ishome' as={CheckboxWithLabel} type='checkbox'
                        Label={{ label: 'Anasayfa\'da gösterilsin' }} color='primary'></Field>
                </Box>
                <Box paddingBottom={2}>
                    <Field name='isapproved' as={CheckboxWithLabel} type='checkbox'
                        Label={{ label: 'Onaylı ürün' }} color='primary'></Field>
                </Box> */}
            </VerticalLinearStep>

        </VerticalLinearStepper>
    )
}

export default observer(AdminProductEditForm)
