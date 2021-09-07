import React from 'react'
import { Box } from '@material-ui/core'
import { InputLabel } from './TextInput.elements'

interface Props {
  name: string;
  label?: string;
}

const CheckboxInput = (props: Props) => {


  return (
    <Box paddingBottom={3}>
      <InputLabel checkbox>{props.label}</InputLabel>
      <input type="checkbox" className='ui checkbox' />
    </Box>
  )
}

export default CheckboxInput
