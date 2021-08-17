// import { Form, Formik } from 'formik'
import { Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Header, Form, Button, Segment } from 'semantic-ui-react'
import TextInput from '../../../app/common/form/TextInput'
import CheckboxInput from '../../../app/common/form/CheckboxInput'
import RelatedSelectInput from '../../../app/common/form/RelatedSelectInput'
import SelectInput from '../../../app/common/form/SelectInput'
import TextArea from '../../../app/common/form/TextArea'
import * as Yup from 'yup';
import { CreateProductFormValues } from '../../../app/models/product';
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'
import PhotoDropzone from '../../../app/common/image/PhotoDropzone'
// import { useHistory } from 'react-router-dom';


const CreateProductForm = () => {

    // const history = useHistory();
    const [product] = useState<CreateProductFormValues>(
        new CreateProductFormValues());
    const { categoryStore, subCategoryStore } = useStore();
    const { loadCategoryOptions, categoryOptions, loading, resetCategoriesOptions } = categoryStore;
    const { loadSubCategoryOptions, relatedSubCategories, relatedSubCategoriesOptions, calculateLoading, resetSubCategoriesOptions } = subCategoryStore

    

    useEffect(() => {
        loadCategoryOptions();
        loadSubCategoryOptions();
        return (() => {
            resetCategoriesOptions();
            resetSubCategoriesOptions();
        })
    }, [loadCategoryOptions, loadSubCategoryOptions, resetCategoriesOptions, resetSubCategoriesOptions])


    const validationSchema = Yup.object({
        name: Yup.string().required('Ürün adı zorunlu alandır.'),
        price: Yup.number().required('Ürün fiyatı zorunlu alandır.'),
        quantity: Yup.number().required('Ürün miktarı zorunlu alandır.'),
        description: Yup.string().required('Ürün açıklaması zorunlu alandır.'),
        categoryId: Yup.string().required('Kategori zorunlu alandır.'),
        subCategoryId: Yup.string().required('Alt Kategori zorunlu alandır.'),
    })

    const handleFormSubmit= (product: CreateProductFormValues) => {
        product.files = files;
        console.log(product);
    }

    const changeSubCategories = (e: any) => {
        relatedSubCategories(e);
        // relatedSubCategoriesOptions.map((value, data) => console.log(value.text));

    }

    const [files, setFiles] = useState<any>([]);

    return (
        <Segment clearing loading={loading}>
            <Header content='Ürün Oluştur' color='black' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={product}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <TextInput name='name' placeholder='Ürün Adı' label='Ürün Adı'/>
                        <TextInput name='price' placeholder='Ürün Fiyatı' label='Ürün Fiyatı' type='number' />
                        <TextInput name='quantity' placeholder='Ürün Adeti' label='Ürün Adeti' type='number' />
                        <TextArea rows={3} placeholder='Ürün Açıklaması' name='description' label='Ürün Açıklaması' />

                        <RelatedSelectInput placeholder='Kategori' name='categoryId' label='Kategori' options={categoryOptions} function={changeSubCategories} />

                        <SelectInput placeholder='Alt Kategori' name='subCategoryId' label='Alt Kategori' options={relatedSubCategoriesOptions} loading={calculateLoading} />

                        <CheckboxInput name='isapproved' label='Onaylı' type='checkbox' />
                        <CheckboxInput name='ishome' label='Anasayfa' type='checkbox' />

                        <PhotoDropzone setFiles={setFiles} files={files} />

                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            floated='right'
                            positive type='submit' content='Submit'
                        />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
}

export default observer(CreateProductForm)
