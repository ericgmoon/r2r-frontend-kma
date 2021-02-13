import React from "react";
import { ThemeProvider } from "react-native-elements";

import StyledButton from "./styles";

export default function Button({
  children,
  icon,
  iconColor,
  color,
  iconLeft,
  buttonStyle,
  iconContainerStyle,
  ...others
}) {
  return (
    <ThemeProvider theme={{ colors: { primary: color || "black" } }}>
      <StyledButton
        title={typeof children === "string" ? children.toUpperCase() : children}
        iconRight={!iconLeft}
        icon={
          icon && {
            name: icon,
            size: 24,
            color: iconColor || "white",
            type: "material",
          }
        }
        {...others}
      />
    </ThemeProvider>
  );
}
