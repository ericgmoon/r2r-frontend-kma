import React from "react";
import { Button as EButton, ThemeProvider } from "react-native-elements";
import styles from "./styles";

export default function Button(props) {
  const {
    children,
    icon,
    iconColor,
    color,
    iconLeft,
    buttonStyle,
    iconContainerStyle,
    ...others
  } = props;

  const getOverrideIconStyle = () => {
    if (icon) return iconLeft ? styles.buttonIconLeft : styles.buttonIconRight;
    return null;
  };

  return (
    <ThemeProvider theme={{ colors: { primary: color || "black" } }}>
      <EButton
        buttonStyle={{
          ...styles.button,
          ...getOverrideIconStyle(),
          ...buttonStyle,
        }}
        iconRight={!iconLeft}
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
        iconContainerStyle={{
          ...(iconLeft ? styles.iconLeft : styles.iconRight),
          ...iconContainerStyle,
        }}
        {...others}
        title={typeof children === "string" ? children.toUpperCase() : children}
      />
    </ThemeProvider>
  );
}
