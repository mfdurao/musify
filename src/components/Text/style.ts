import { Props } from './index';
import styled from "styled-components";

export const TextStyle = styled.p<Props>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin: ${props => props.margin};
  text-align:${props => props.position};
`;
