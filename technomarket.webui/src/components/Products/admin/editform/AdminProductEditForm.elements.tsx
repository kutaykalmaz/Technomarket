import styled from "styled-components";

interface Props {
  last?: boolean;
  active: boolean;
}


export const FormWrapper = styled.div`
  

`


export const FormStep = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr;
  margin-bottom: 20px;
`


export const StepProgress = styled.span`
  height: 30px;
  width: 30px;
  border: 2px solid #1888ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

`

export const StepProgressWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;  

  &::before {
    ${(props: Props) => props.last && 'display: none;'}
    content: '';
    background-color: ${(props:Props) => props.active ? '#1888ff' : '#000'};
    position: absolute;
    width: 2px;
    height: 100%;
    top: 30px;
    left: 0; 
    right: 0;
    margin: 0 auto;
  }

  & ${StepProgress} {
    border: 2px solid ${(props:Props) => props.active ? '#1888ff' : '#000'};
  }

`


export const StepContentWrapper = styled.div`

`

export const StepHeader = styled.h3`

`

export const StepContent = styled.div`

`

export const StepButtonWrapper = styled.div`

`

export const StepButton = styled.button`
  margin-right: 20px;
  margin-top: 20px;
`

