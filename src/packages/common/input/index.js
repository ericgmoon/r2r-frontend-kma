import React from "react";
import { Input as EInput, ThemeProvider } from "react-native-elements";
import { inputStyle, iconStyle, containerStyle, labelStyle } from "./styles";

export default function Input(props) {
  const { placeholder, label, color, icon, ...others } = props;

  return (
    <ThemeProvider theme={{ colors: { primary: color || "black" } }}>
      <EInput
        inputStyle={inputStyle}
        containerStyle={containerStyle}
        iconLeft
        icon={
          icon
            ? {
                name: icon,
                size: 24,
                color: iconColor || "white",
                type: "material",
              }
            : null
        }
        iconContainerStyle={iconStyle}
        placeholder={placeholder}
        label={label}
        {...others}
        labelStyle={labelStyle}
      />
    </ThemeProvider>
  );
}
