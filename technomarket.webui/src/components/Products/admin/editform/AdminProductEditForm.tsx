import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { EditProductFormValues } from '../../../../app/models/product'
import {
  FormWrapper, FormStep, StepHeader, StepContent,
  StepProgress, StepContentWrapper, StepProgressWrapper,
  StepButtonWrapper, StepButton
} from './AdminProductEditForm.elements'


interface Props {
  product: EditProductFormValues
}

const AdminProductEditForm = ({ product }: Props) => {

  const [step, setStep] = useState(0)

  const handleNext = () => {
    if (step < 2) setStep((prev) => prev + 1)

    return;
  }

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1)

    return;
  }

  console.log(step)

  return (
    <FormWrapper>
      <FormStep>
        <StepProgressWrapper active={step >= 1 ? true : false}>
          <StepProgress>1</StepProgress>
        </StepProgressWrapper>
        <StepContentWrapper>
          <StepHeader>Step 1</StepHeader>
          {step === 0 &&
          <StepContent>
            Step 1 Content
            <StepButtonWrapper>
              <StepButton onClick={handleNext}>İleri</StepButton>
            </StepButtonWrapper>
          </StepContent>
          }
        </StepContentWrapper>

      </FormStep>
      <FormStep>
        <StepProgressWrapper active={step >= 2 ? true : false}>
          <StepProgress>2</StepProgress>
        </StepProgressWrapper>
        <StepContentWrapper>
          <StepHeader>Step 2</StepHeader>
          {step === 1 &&
          <StepContent>
            Step 2 Content
            <StepButtonWrapper>
              <StepButton onClick={handleBack}>Geri</StepButton>
              <StepButton onClick={handleNext}>İleri</StepButton>
            </StepButtonWrapper>
          </StepContent>
          }
        </StepContentWrapper>
      </FormStep>
      <FormStep>
        <StepProgressWrapper last active={step >= 2 ? true : false}>
          <StepProgress>3</StepProgress>
        </StepProgressWrapper>
        <StepContentWrapper>
          <StepHeader>Step 3</StepHeader>
          {step === 2 &&
          <StepContent>
            Step 3 Content
            <StepButtonWrapper>
              <StepButton onClick={handleBack}>Geri</StepButton>
              <StepButton onClick={handleNext}>Gönder</StepButton>
            </StepButtonWrapper>
          </StepContent>
          }
        </StepContentWrapper>
      </FormStep>
    </FormWrapper>
  )
}

export default observer(AdminProductEditForm)
