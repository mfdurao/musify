import React from "react";
import { TextStyle } from "./style";

export interface Props {
  color?: string;
  size?: string;
  weight?: string;
  margin?: string;
  position?: string;
  content?: string;
}

const Text = ({ color, size, weight, margin, position, content }: Props) => {
  return (
    <TextStyle color={color} size={size} weight={weight} margin={margin} position={position}>
      {content}
    </TextStyle>
  );
};

export default Text;
