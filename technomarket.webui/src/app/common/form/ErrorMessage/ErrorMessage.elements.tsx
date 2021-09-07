import styled, { Keyframes } from "styled-components";

interface Props {
  animation: false | "" | Keyframes | undefined;
}


export const Message = styled.div`
  font-size: 16px;
  height: 20px;
  margin-left: 10px;
  margin-top: 10px;
  color: #ed4337;
  animation: ${(props: Props) => props.animation} .5s;
  user-select: none;

`

export const MessageContent = styled.label`

`