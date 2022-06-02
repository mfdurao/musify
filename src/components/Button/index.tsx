import React from "react";

import { ButtonStyle, ButtonWrapper } from "./style";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  content: string;
  redirect: string;
}

const Button = ({type, content, redirect}: Props) => {
  return(
    <ButtonWrapper to={`${redirect}`}>
      <ButtonStyle type={type}>{content}</ButtonStyle>
    </ButtonWrapper>
  )
}

export default Button;