import React from "react";
import { InputStyle } from "./style";

interface Props {
  type: string;
  placeholder: string;
}

const Input = ({type, placeholder}: Props) => {
  return(
    <InputStyle type={type} placeholder={placeholder} />
  )
}

export default Input;