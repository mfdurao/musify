import React from "react";

import { ButtonStyle, ButtonWrapper } from "./style";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  content: string;
}

const Button = ({ type, content }: Props) => {
  return (
    <ButtonWrapper>
      <ButtonStyle type={type}>{content}</ButtonStyle>
    </ButtonWrapper>
  );
};

export default Button;
