import React from "react";
import { InputStyle } from "./style";

interface Props {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete?: string;
}

const Input = ({ type, placeholder, onChange, autocomplete }: Props) => (
  <>
    {type === "password" ? (
      <InputStyle
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autocomplete}
      />
    ) : (
      <InputStyle type={type} placeholder={placeholder} onChange={onChange} />
    )}
  </>
);
export default Input;
