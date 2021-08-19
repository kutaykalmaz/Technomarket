import React, { Dispatch, SetStateAction } from 'react'
import { observer } from 'mobx-react-lite'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Box, TextField, Button, Card, CardContent, CircularProgress } from '@material-ui/core';
import { ISelectedCategory } from '../../../pages/admin/CreateCategoryPage';
import { v4 as uuid } from 'uuid';
import { useStore } from '../../../app/stores/store';
import { toast } from 'react-toastify'

interface Props {
    selectedCategory: ISelectedCategory
    setSelectedCategory: Dispatch<SetStateAction<ISelectedCategory>>

}

const CreateCategoryForm = ({ selectedCategory, setSelectedCategory }: Props) => {

    const { categoryStore } = useStore()
    const { createCategory, updateCategory, loadingPost } = categoryStore


    const handleSubmit = async (values: ISelectedCategory, resetForm: () => void) => {
        if (values.id) await updateCategory(values).then(() => {
            resetForm()
            setSelectedCategory({ id: '', name: '' })
            toast.success('Kategori başarıyla güncellendi.')
        })
        else {
            values.id = uuid()
            await createCategory(values).then(resetForm)
            toast.success('Kategori başarıyla oluşturuldu.')
        }
    }


    return (
        <Card>
            <CardContent>
                <Formik
                    initialValues={selectedCategory}
                    enableReinitialize
                    onSubmit={(values, actions) => handleSubmit(values, actions.resetForm)}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Kategori adı zorunlu bir alandır.')
                    })}
                >

                    {({ handleSubmit, isValid, dirty }) => (

                        <Form autoComplete='off' onSubmit={handleSubmit}>
                            <Box paddingBottom={2}>
                                <Field name='name' label='Kategori Adı' as={TextField} variant="outlined" fullWidth margin="dense" helperText={<ErrorMessage name='name' />} error={!isValid}></Field>
                            </Box>
                            <Button startIcon={loadingPost ? <CircularProgress size='1rem' /> : null} disabled={loadingPost || !isValid || !dirty} variant='contained' color='primary' type='submit'>
                                {loadingPost ? 'Gönderiliyor' : 'Gönder'}
                            </Button>
                        </Form>
                    )}

                </Formik>
            </CardContent>
        </Card>

    )
}

export default observer(CreateCategoryForm)