import React from "react";
import StyledInput from "./styles";

export default function Input(props) {
  const { placeholder, label, color, icon, style, ...others } = props;

  return (
    <StyledInput
      inputContainerStyle={style}
      placeholder={placeholder}
      label={label}
      {...others}
    />
  );
}
