import React, { useEffect } from 'react'
import { useField } from 'formik'
import { Form, Select } from 'semantic-ui-react'
import { InputLabel } from './TextInput.elements';
import ErrorMessage from './ErrorMessage/ErrorMessage';


interface Props {
  name: string;
  options?: any;
  label?: string;
  changeOption: (e: any) => void;
  loading?: boolean;
}


const RelatedSelectInput = ({ name, options, label, changeOption, loading }: Props) => {
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    changeOption(field.value)
    console.log('girdi')
  }, [field.value, changeOption])


  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <InputLabel>{label}</InputLabel>
      <Select
        loading={loading}
        noResultsMessage='Bir sonuç bulunamadı'
        {...field}
        fluid
        search
        clearable
        value={field.value}
        options={options}
        onChange={(e, d) => {
          helpers.setValue(d.value)
        }}
        onBlur={() => { helpers.setTouched(true) }}

      />
      <ErrorMessage meta={meta} />
    </Form.Field>
  )
}

export default RelatedSelectInput
