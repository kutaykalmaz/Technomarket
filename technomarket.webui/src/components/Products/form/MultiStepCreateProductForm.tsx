import React, { useEffect, useState } from 'react'
import { CardContent, Card, Box } from '@material-ui/core'
import { Field, FormikValues } from 'formik'
import { CheckboxWithLabel, TextField } from 'formik-material-ui'
import { CreateProductFormValues } from '../../../app/models/product'
import * as Yup from 'yup';
import { FormikStep, FormikStepper } from './MultiStepFormik'
import RelatedSelectInput from '../../../app/common/form/RelatedSelectInput'
import { useStore } from '../../../app/stores/store'
import SelectInput from '../../../app/common/form/SelectInput'
import { observer } from 'mobx-react-lite'
import { DropzoneArea } from 'material-ui-dropzone';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom'

const MultiStepCreateProductForm = () => {

    const [product] = useState<CreateProductFormValues>(
        new CreateProductFormValues());
    const [files, setFiles] = useState<File[]>([]);
    const history = useHistory();

    const { categoryStore, subCategoryStore, productStore } = useStore();
    const { createProduct } = productStore;
    const { loadCategoryOptions, categoryOptions, resetCategoriesOptions } = categoryStore;
    const { loadSubCategoryOptions, relatedSubCategories, relatedSubCategoriesOptions, resetSubCategoriesOptions } = subCategoryStore

    useEffect(() => {
        loadCategoryOptions();
        loadSubCategoryOptions();
        return (() => {
            resetCategoriesOptions();
            resetSubCategoriesOptions();
        })
    }, [loadCategoryOptions, loadSubCategoryOptions, resetCategoriesOptions, resetSubCategoriesOptions])

    const changeSubCategories = (e: any) => {
        relatedSubCategories(e);
    }

    const handleFormSubmit = async (product: FormikValues) => {
        product.id = uuid()
        product.files = files;
        await createProduct(product as CreateProductFormValues).then(() => history.push(`/products/${product.id}`))
    }

    return (
        <Card>
            <CardContent>
                <FormikStepper
                    initialValues={product}
                    onSubmit={(values) => handleFormSubmit(values)}
                >
                    <FormikStep
                        validationSchema={Yup.object({
                            name: Yup.string().required('Ürün adı zorunlu alandır.'),
                            price: Yup.number().required('Ürün fiyatı zorunlu alandır.'),
                            quantity: Yup.number().required('Ürün miktarı zorunlu alandır.'),
                            description: Yup.string().required('Ürün açıklaması zorunlu alandır.')
                        })}
                        label='Ürün Bilgileri'
                    >
                        <Box paddingBottom={2}>
                            <Field name='name' label='Ürün Adı' component={TextField} variant="outlined" fullWidth margin="dense"></Field>
                        </Box>
                        <Box paddingBottom={2}>
                            <Field name='price' label='Ürün Fiyatı' type='number' component={TextField} variant="outlined" fullWidth margin="dense" value={undefined}></Field>
                        </Box>
                        <Box paddingBottom={2}>
                            <Field name='quantity' label='Ürün Adeti' type='number' component={TextField} variant="outlined" fullWidth margin="dense" value={undefined}></Field>
                        </Box>
                        <Box paddingBottom={2}>
                            <Field name='description' multiline minRows={4} maxRows={4} label='Ürün Açıklaması' component={TextField} variant="outlined" fullWidth margin="dense"></Field>
                        </Box>
                    </FormikStep>

                    <FormikStep label='Kategori ve Sınıflandırma Bilgileri'
                        validationSchema={Yup.object({
                            categoryId: Yup.string().required('Kategori zorunlu alandır.'),
                            subCategoryId: Yup.string().required('Alt kategori zorunlu alandır.')
                        })}
                    >

                        <Box paddingBottom={2}>
                            <RelatedSelectInput placeholder='Kategori' name='categoryId' label='Kategori' options={categoryOptions} function={changeSubCategories} />
                        </Box>

                        <Box paddingBottom={2}>
                            <SelectInput placeholder='Alt Kategori' name='subCategoryId' label='Alt Kategori' options={relatedSubCategoriesOptions} disabled={relatedSubCategoriesOptions.length === 0} />
                        </Box>

                        <Box paddingBottom={2}>
                            <Field name='ishome' component={CheckboxWithLabel} type='checkbox'
                                Label={{ label: 'Anasayfa\'da gösterilsin' }} color='primary'></Field>
                        </Box>
                        <Box paddingBottom={2}>
                            <Field name='isapproved' component={CheckboxWithLabel} type='checkbox'
                                Label={{ label: 'Onaylı ürün' }} color='primary'></Field>
                        </Box>
                    </FormikStep>

                    <FormikStep label='Ürün Fotoğrafları'>
                        <Box paddingBottom={2} paddingTop={3}>
                            <DropzoneArea
                                onChange={(files) => setFiles(files)}
                                acceptedFiles={['image/*']}
                                showFileNames
                                dropzoneText="Sürükle ve Bırak veya Tıkla"
                                showAlerts={false}
                                filesLimit={20}
                            />
                        </Box>
                    </FormikStep>

                </FormikStepper>
            </CardContent>
        </Card>
    )
}

export default observer(MultiStepCreateProductForm)


