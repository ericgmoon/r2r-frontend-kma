import React from "react";
import { Button as EButton, ThemeProvider } from "react-native-elements";
import styles from "./styles";

export default function Button(props) {
  const { children, icon, iconColor, color, ...others } = props;

  return (
    <ThemeProvider theme={{ colors: { primary: color || "black" } }}>
      <EButton
        buttonStyle={styles.button}
        iconRight
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
        iconContainerStyle={styles.icon}
        {...others}
        title={children}
      />
    </ThemeProvider>
  );
}
