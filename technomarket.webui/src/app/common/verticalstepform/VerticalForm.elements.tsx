import styled from "styled-components";

interface Props {
  last?: boolean;
  active?: boolean;
  disabled? : boolean;
  primary? : boolean;
}

export const FormWrapper = styled.div`

`


export const FormStep = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr;
  margin-bottom: 20px;
  grid-column-gap: 5px;
`


export const StepProgress = styled.span`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid ${(props:Props) => props.active ? '#1888ff' : '#000'};
  color: ${(props:Props) => props.active ? '#1888ff' : '#000'};
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
    top: 40px;
    left: 0; 
    right: 0;
    margin: 0 auto;
  }
`


export const StepContentWrapper = styled.div`
  margin-top: 8px;
`

export const StepHeader = styled.h3`
  font-size: 22px;
`

export const StepContent = styled.div`
  margin-top: 40px;
`

export const StepButtonWrapper = styled.div`

`



