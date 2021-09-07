import React from 'react'
import { useField } from 'formik'
import { Form, TextArea } from 'semantic-ui-react'
import { InputLabel } from './TextInput.elements';
import ErrorMessage from './ErrorMessage/ErrorMessage';

interface Props {
    placeholder?: string;
    name: string;
    rows?: number;
    label?: string;
    width?: number;
}

const MyTextArea = (props: Props) => {
    const [field, meta] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <InputLabel error={meta.touched && !!meta.error}>{props.label}</InputLabel>

            <TextArea {...field} 
              name={props.name} 
              style={{width: props.width ? `${props.width}rem` : '100%', resize:'none'}}
              placeholder={props.placeholder ? props.placeholder : ''}
              rows={props.rows ? props.rows : 3}
            />
            <ErrorMessage meta={meta} />
        </Form.Field>
    )
}

export default MyTextArea
