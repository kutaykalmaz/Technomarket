import React from 'react'
import { useField } from 'formik'
import { Form, Input } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import { InputLabel } from './TextInput.elements'

interface Props {
  placeholder?: string;
  name: string;
  type?: string;
  label?: string;
  fullwidth?: boolean;
  width?: number;
}



const TextInput = (props: Props) => {

  const [field, meta] = useField(props.name)

  return (
    <Form.Field error={meta.touched && !!meta.error}>
        <InputLabel error={meta.touched && !!meta.error}>{props.label}</InputLabel>
        <Input {...field} 
          style={{width: props.width ? `${props.width}rem` : 'auto'}}
          fluid={props.fullwidth ? true : false}
          name={props.name} 
          type={props.type ? props.type : 'text'} 
          placeholder={props.placeholder ? props.placeholder : ''}
        />
        <ErrorMessage meta={meta}/>
    </Form.Field>
  )
}

export default TextInput
