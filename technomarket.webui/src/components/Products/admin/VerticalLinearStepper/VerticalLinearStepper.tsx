import React, { useState } from 'react'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));



export interface VerticalLinearStepperProps extends Pick<FormikConfig<FormikValues>,
    'children' | 'validationSchema'> {
    label: string;
}

export function VerticalLinearStep({ children }: VerticalLinearStepperProps) {
    return (
        <>
            {children}
        </>
    )

}

const VerticalLinearStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {

    const classes = useStyles();
    const childrenArray = React.Children.toArray(children) as
        React.ReactElement<VerticalLinearStepperProps>[];
    const [step, setStep] = useState(0);

    const currentChild = childrenArray[step] as React.ReactElement<VerticalLinearStepperProps>;

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    const handleSubmit = (values: FormikValues) => {
        console.log(values)
    }

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleReset = () => {
        setStep(0);
    };
    

    return (
        <Formik
            enableReinitialize
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => await props.onSubmit(values, helpers)}
        >
            {({ isSubmitting }) => (

                <Form autoComplete='off'>
                    <Stepper activeStep={step} orientation="vertical">
                        {childrenArray.map((child, index) => (
                            <Step key={child.props.label}>
                                <StepLabel>{child.props.label}</StepLabel>
                                <StepContent>
                                    <Typography>{currentChild}</Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            { step > 0 &&
                                                <Button
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                Geri
                                            </Button>
                                            }
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                {step === childrenArray.length - 1 ? 'Tamam' : 'İleri'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>

                    {step === childrenArray.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Ürününüz başarıyla güncellendi.</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Tamam
                            </Button>
                        </Paper>
                    )}

                </Form>
            )}
        </Formik>
    )
}

export default observer(VerticalLinearStepper)
