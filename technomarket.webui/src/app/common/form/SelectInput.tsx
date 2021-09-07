import React from 'react'
import { useField } from 'formik'
import { Form, Select } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { InputLabel } from './TextInput.elements';

interface Props {
    placeholder?: string;
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
            <InputLabel>{props.label}</InputLabel>
            <Select
                noResultsMessage='Bir sonuç bulunamadı'
                disabled={props.disabled}
                fluid
                search
                clearable
                options={props.options}
                value={field.value}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
                loading={props.loading}

            />
            <ErrorMessage meta={meta} />
        </Form.Field>
    )
}

export default SelectInput
