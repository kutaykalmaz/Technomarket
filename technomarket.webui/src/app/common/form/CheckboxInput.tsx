import React from 'react'
import { useField } from 'formik'
import { Form } from 'semantic-ui-react'

interface Props {
    name: string;
    label?: string;
    type?: string;
}

const CheckboxInput = (props: Props) => {

    const [field] = useField(props.name)

    return (
        <Form.Field>
                <label>{props.label}</label>
                <input {...field} {...props} className='checkbox ui' />
        </Form.Field>
    )
}

export default CheckboxInput
