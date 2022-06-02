import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonWrapper = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonStyle = styled.button`
  width: 60%;
  height: 40px;
  background: linear-gradient(330deg, rgba(0, 255, 100, 0.6), rgba(0, 255, 100));
  border: none;
  border-radius: 20px;
  font-weight: 700;
  cursor: pointer;
`;
