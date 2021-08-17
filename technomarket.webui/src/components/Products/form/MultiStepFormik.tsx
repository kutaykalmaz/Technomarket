import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Grid, Button, CircularProgress } from '@material-ui/core'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'
import FormButtons from './FormButtons'


export interface FormikStepProps extends Pick<FormikConfig<FormikValues>,
    'children' | 'validationSchema'> {
    label: string;
}


export function FormikStep({ children }: FormikStepProps) {
    return (
        <>
            {children}
        </>
    )

}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {

    const childrenArray = React.Children.toArray(children) as
        React.ReactElement<FormikStepProps>[];

    const [completed, setCompleted] = useState(false);

    const [step, setStep] = useState(0);

    const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>;

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            enableReinitialize
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers)
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1)
                }
            }}
        >
            {({ isSubmitting }) => (

                <Form autoComplete='off'>

                    <Stepper alternativeLabel activeStep={step}>
                        {childrenArray.map((child, index) => (
                            <Step key={child.props.label} completed={step > index || completed}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}
                    <FormButtons step={step} isSubmitting={isSubmitting} isLastStep={isLastStep} setStep={setStep} />

                </Form>
            )}
        </Formik>
    )
}