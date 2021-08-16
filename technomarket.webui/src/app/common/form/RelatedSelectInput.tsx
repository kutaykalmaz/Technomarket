import React from 'react'
import { useField } from 'formik'
import { Form, Label, Select } from 'semantic-ui-react'

interface Props {
    placeholder: string;
    name: string;
    options?: any;
    label?: string;
    function: (e: any) => void;
}

const RelatedSelectInput = (props: Props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        // '!!' casts string into a boolean
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(e, d) => {
                    helpers.setValue(d.value)
                    props.function(d.value)
                }}
                onBlur={() => { helpers.setTouched(true) }}
                placeholder={props.placeholder}

            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}

export default RelatedSelectInput
