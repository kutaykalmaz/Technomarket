import styled from "styled-components";

interface Props {
  error?: boolean;
  checkbox?:boolean;
}

export const InputLabel = styled.div`
  display: ${(props:Props) => props.checkbox ? 'inline' : 'block'};
  font-size: 20px;
  margin-bottom: 10px;
  ${(props:Props) => props.checkbox && 'margin-right: 20px;'}
  ${(props:Props) => props.error && 'color: #9f3a38'};

`