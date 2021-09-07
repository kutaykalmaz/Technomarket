import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import VerticalForm from '../../../app/common/verticalstepform/VerticalForm'
import { VerticalStep } from '../../../app/common/verticalstepform/VerticalForm'
import * as Yup from 'yup';
import TextInput from '../../../app/common/form/TextInput'
import MyTextArea from '../../../app/common/form/TextArea'
import SelectInput from '../../../app/common/form/SelectInput';
import { useStore } from '../../../app/stores/store';
import { EditProductFormValues } from '../../../app/models/product';
import { FormikValues } from 'formik';
import RelatedSelectInput from '../../../app/common/form/RelatedSelectInput';
import { Grid } from 'semantic-ui-react';
import CheckboxInput from '../../../app/common/form/CheckboxInput';


interface Props {
  product: EditProductFormValues
}

const AdminProductEditForm = ({ product }: Props) => {

  const { categoryStore, subCategoryStore } = useStore();
  const { loadCategoryOptions, categoryOptions, categoryOptionsLoading, resetCategoriesOptions } = categoryStore;
  const { loadSubCategoryOptions, relatedSubCategories, relatedSubCategoriesOptions, resetSubCategoriesOptions } = subCategoryStore

  useEffect(() => {
    loadCategoryOptions();
    loadSubCategoryOptions();
    return () => {
      resetCategoriesOptions();
      resetSubCategoriesOptions();
    }
  }, [loadCategoryOptions, loadSubCategoryOptions, resetCategoriesOptions, resetSubCategoriesOptions])


  const handleSubmit = async (values: FormikValues, setSubmitting: (isSubmitting: boolean) => void) => {
    setTimeout(() => {
      console.log(values)
      setSubmitting(false);
    }, 1000);
  }


  return (
    <VerticalForm
      initialValues={product}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
    >
      <VerticalStep
        stepHeader='Ürün Bilgileri'
        validationSchema={Yup.object({
          name: Yup.string().required('Ürün adı zorunlu alandır.'),
          description: Yup.string().required('Ürün açıklaması zorunlu alandır.')
        })}
      >
        <TextInput name='name' label='Ürün Adı' fullwidth />
        <MyTextArea name='description' label='Ürün Açıklaması' />

      </VerticalStep>

      <VerticalStep
        stepHeader='Sınıflandırma ve Kategori'
        validationSchema={Yup.object({
          categoryId: Yup.string().required('Kategori zorunlu alandır.'),
          subCategoryId: Yup.string().required('Alt kategori zorunlu alandır.')
        })}
      >
        <RelatedSelectInput
          name='categoryId'
          label='Kategori'
          options={categoryOptions}
          loading={categoryOptionsLoading}
          changeOption={relatedSubCategories}
        />

        <SelectInput
          name='subCategoryId'
          loading={categoryOptionsLoading}
          label='Alt Kategori'
          options={relatedSubCategoriesOptions}
          disabled={relatedSubCategoriesOptions.length === 0}
        />

      </VerticalStep>

      <VerticalStep
        stepHeader='Ürün Ayarları'
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width='8'>
              <TextInput name='price' label='Ürün Fiyatı (₺)' fullwidth type='number' />
            </Grid.Column>
            <Grid.Column width='8'>
              <TextInput name='quantity' label='Ürün Adeti' fullwidth type='number' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width='8'>
              <CheckboxInput label='Anasayfa Ürünü' name='isHome'></CheckboxInput>
            </Grid.Column>
            <Grid.Column width='8'>
              <CheckboxInput label='Onaylı Ürün' name='isApproved'></CheckboxInput>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </VerticalStep>
    </VerticalForm>
  )
}

export default observer(AdminProductEditForm)
