import React from "react";
import { Input as EInput, ThemeProvider } from "react-native-elements";
import { inputStyle, inputContainerStyle, labelStyle } from "./styles";

export default function Input(props) {
  const { placeholder, label, color, icon, style, ...others } = props;

  return (
    <ThemeProvider theme={{ colors: { primary: color || "black" } }}>
      <EInput
        inputStyle={inputStyle}
        inputContainerStyle={{ ...inputContainerStyle, ...style }}
        placeholder={placeholder}
        label={label}
        {...others}
        labelStyle={labelStyle}
      />
    </ThemeProvider>
  );
}
