import React from 'react'
import { useField } from 'formik'
import { Form, Label, Select } from 'semantic-ui-react'
import { Box, InputLabel } from '@material-ui/core';

interface Props {
    placeholder: string;
    name: string;
    options?: any;
    label?: string;
    loading?: boolean;
    disabled?: boolean;

}

const SelectInput = (props: Props) => {
    const [field, meta, helpers] = useField(props.name);
    return (
        // '!!' casts string into a boolean
        <Form.Field error={meta.touched && !!meta.error}>
            <Box paddingBottom={2}>
                <InputLabel>{props.label}</InputLabel>
            </Box>
            <Select
                disabled={props.disabled}
                fluid
                search
                selection
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
            ) : null}
        </Form.Field>
    )
}

export default SelectInput
