import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  FormWrapper, FormStep, StepHeader, StepContent,
  StepProgress, StepContentWrapper, StepProgressWrapper,
  StepButtonWrapper
} from './VerticalForm.elements'
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai'
import AnimateHeight from 'react-animate-height';
import { Formik, FormikConfig, FormikValues } from 'formik'
import { Button, Form } from 'semantic-ui-react';


export interface VerticalStepProps extends Pick<FormikConfig<FormikValues>,
  'children' | 'validationSchema'> {
  stepHeader: string;
}


export function VerticalStep({ children }: VerticalStepProps) {
  return (
    <>
      {children}
    </>
  )
}


const VerticalForm = ({ children, ...props }: FormikConfig<FormikValues>) => {

  const childrenArray = React.Children.toArray(children) as
    React.ReactElement<VerticalStepProps>[];


  const [step, setStep] = useState(0)

  const currentChild = childrenArray[step] as React.ReactElement<VerticalStepProps>;

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1)

    return;
  }


  return (
    <Formik
      enableReinitialize
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={(values, helpers) => {
          if (isLastStep()) {
            props.onSubmit(values, helpers)
          } else {
            helpers.setSubmitting(false);
            setStep((s) => s + 1)
          }
        }}
    >
      {({ isSubmitting, handleSubmit }) => (

        <Form autoComplete='off' onSubmit={handleSubmit}>
          <FormWrapper>
            {childrenArray.map((child, index) => (
              <FormStep key={index}>
                <StepProgressWrapper
                  active={step >= index + 1 ? true : false}
                  last={index === childrenArray.length - 1 ? true : false}
                >
                  <StepProgress active={step >= index ? true : false}>{step === index ? <AiFillEdit /> : step > index ? <AiOutlineCheck /> : index + 1}</StepProgress>
                </StepProgressWrapper>
                <StepContentWrapper>
                  <StepHeader>{child.props.stepHeader}</StepHeader>
                  <AnimateHeight
                    height={step === index ? 'auto' : 0}
                    duration={500}
                  >
                    <StepContent>

                      {child}
                      <StepButtonWrapper>
                        <Button 
                        size='large' 
                        negative 
                        type='button' 
                        onClick={handleBack} 
                        disabled={step === 0 ? true : isSubmitting ? true : false}>Geri</Button>
                        
                        <Button 
                          primary 
                          type='submit' 
                          size='large'
                          disabled={isSubmitting}
                          loading={isSubmitting}
                        >
                          {index === childrenArray.length - 1 ? 'Gönder' : 'İleri'}
                        </Button>

                      </StepButtonWrapper>
                    </StepContent>
                  </AnimateHeight>
                </StepContentWrapper>
              </FormStep>
            ))}
          </FormWrapper>
        </Form>
      )}
    </Formik>
  )
}

export default observer(VerticalForm)
