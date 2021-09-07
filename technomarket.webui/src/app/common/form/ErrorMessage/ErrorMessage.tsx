import { FieldMetaProps } from 'formik';
import React from 'react'
import { keyframes } from 'styled-components';
import { Message, MessageContent } from './ErrorMessage.elements'

interface Props {
  meta: FieldMetaProps<any>;
}




const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ErrorMessage = ({ meta }: Props) => {

  return (
    <Message animation={meta.touched && meta.error && fadeInDown}>
      {meta.touched && meta.error && (
        <MessageContent>
          {meta.error}
        </MessageContent>
      )}
    </Message>
  )
}

export default ErrorMessage
