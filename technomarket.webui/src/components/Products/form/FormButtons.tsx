import React from 'react'
import { Grid, Button, CircularProgress } from '@material-ui/core'

interface Props {
    step: number;
    isSubmitting: boolean;
    isLastStep: () => boolean;
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const FormButtons = ({step, isSubmitting, isLastStep, setStep}: Props) => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                {step > 0 && <Button disabled={isSubmitting} variant='contained' color='primary' onClick={() => setStep(s => s - 1)}>Geri</Button>}
            </Grid>
            <Grid item>
                <Button startIcon={isSubmitting ? <CircularProgress size='1rem' /> : null} disabled={isSubmitting} variant='contained' color='primary' type="submit">
                    {isSubmitting ? 'Oluşturuluyor' : isLastStep() ? 'Oluştur' : 'İleri'}
                </Button>
            </Grid>
        </Grid>
    )
}

export default FormButtons
