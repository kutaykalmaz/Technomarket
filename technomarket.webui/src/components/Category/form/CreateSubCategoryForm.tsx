import { Box, Button, Card, CardContent, CircularProgress, TextField } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { ISelectedSubCategory } from '../../../pages/admin/CreateCategoryPage'
import * as Yup from 'yup';
import { useStore } from '../../../app/stores/store'
import RelatedSelectInput from '../../../app/common/form/RelatedSelectInput'
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify'

const CreateSubCategoryForm = () => {

    const { subCategoryStore, categoryStore } = useStore()
    const { categoryOptions, loadCategoryOptions } = categoryStore
    const { updateSubCategory, createSubCategory, loading: loadingSubCategory, selectedSubCategory, setSelectedSubCategory } = subCategoryStore

    const handleSubmit = async (values: ISelectedSubCategory, resetForm: () => void) => {
        if (values.id) await updateSubCategory(values).then(() => {
            resetForm()
            setSelectedSubCategory({ id: '', name: '', category: '' })
            toast.success('Alt kategori başarıyla güncellendi.')
        })
        else {
            values.id = uuid()
            await createSubCategory(values).then(resetForm)
            toast.success('Alt kategori başarıyla oluşturuldu.')
        }
    }

    useEffect(() => {
        loadCategoryOptions()
    }, [loadCategoryOptions])


    return (
        <Card style={{ overflow: 'visible' }}>
            <CardContent>
                <Formik
                    initialValues={selectedSubCategory}
                    enableReinitialize
                    onSubmit={(values, actions) => handleSubmit(values, actions.resetForm)}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Alt kategori adı zorunlu bir alandır.'),
                        category: Yup.string().required('Kategori seçimi zorunlu bir alandır.')
                    })}
                >

                    {({ handleSubmit, isValid, dirty }) => (

                        <Form autoComplete='off' onSubmit={handleSubmit}>
                            <Box paddingBottom={2}>
                                <Field name='name' label='Alt Kategori Adı' as={TextField} variant="outlined" fullWidth margin="dense" helperText={<ErrorMessage name='name' />} error={!isValid}></Field>
                            </Box>
                            <Box paddingBottom={2}>
                                <RelatedSelectInput placeholder='Kategori' name='category' label='Kategori' options={categoryOptions} />
                            </Box>
                            <Button startIcon={loadingSubCategory ? <CircularProgress size='1rem' /> : null} disabled={loadingSubCategory || !isValid || !dirty} variant='contained' color='primary' type='submit'>
                                {loadingSubCategory ? 'Gönderiliyor' : 'Gönder'}
                            </Button>
                        </Form>
                    )}

                </Formik>
            </CardContent>
        </Card>
    )
}

export default observer(CreateSubCategoryForm)
