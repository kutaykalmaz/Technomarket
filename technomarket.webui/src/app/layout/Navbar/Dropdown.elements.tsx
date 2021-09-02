import styled, { keyframes } from "styled-components";
import { Link as LinkR } from 'react-router-dom'

interface Props {
  click: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropdownWrapper = styled.ul`
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  z-index: 10000;
  animation: ${fadeIn} .7s;

  ${(props: Props) => props.click && 'display : none;'}
`

export const DropdownItem = styled.li`
  background: #1888ff;
  cursor: pointer;

  &:hover {
    background: #5cabff;
  }
`

export const DropdownLink = styled(LinkR)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  padding: 16px;

  &:hover {
    color: #fff;
  }
`