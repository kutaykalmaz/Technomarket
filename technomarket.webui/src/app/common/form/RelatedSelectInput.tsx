import React from 'react'
import { useField } from 'formik'
import { Form, Label, Select } from 'semantic-ui-react'
import { Box, InputLabel } from '@material-ui/core';
import './inputStyle.css'


interface Props {
    placeholder: string;
    name: string;
    options?: any;
    label?: string;
    function?: (e: any) => void;
}


const RelatedSelectInput = (props: Props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        // '!!' casts string into a boolean
        <Form.Field error={meta.touched && !!meta.error}>
            <Box paddingBottom={2}>
                <InputLabel>{props.label}</InputLabel>
            </Box>
            <Select
                className='inputStyle'
                fluid
                search
                selection
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(e, d) => {
                    helpers.setValue(d.value)
                    props.function && props.function(d.value)
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
