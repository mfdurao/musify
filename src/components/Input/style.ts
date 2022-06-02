import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  height: 20px;
  padding: 15px;
  outline: none;
  color:#fff;
  background: #171818;
  border:1px solid #404345;
  border-radius: 20px;

  transition: all 0.5s;

  :focus{
    border: 1px solid rgba(0, 255, 100);
  }
  ::placeholder{
    font-style: italic;
    font-size: 12px;
    color: #C5C5C550;
  }
`;
