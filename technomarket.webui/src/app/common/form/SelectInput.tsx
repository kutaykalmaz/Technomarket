import React from 'react'
import { useField } from 'formik'
import { Form, Label, Select } from 'semantic-ui-react'

interface Props {
    placeholder: string;
    name: string;
    options?: any;
    label?: string;
    loading?: boolean;
    
}

const SelectInput = (props: Props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        // '!!' casts string into a boolean
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select 
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
                loading={props.loading}
            
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null }
        </Form.Field>
    )
}

export default SelectInput