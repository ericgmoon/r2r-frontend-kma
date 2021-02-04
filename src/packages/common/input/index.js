import React from "react";
import { Input as EInput, ThemeProvider } from "react-native-elements";
import styles from "./styles";

export default function Input(props) {
  const { placeholder, label, color, icon, ...others } = props;

  return (
    <ThemeProvider theme={{ colors: { primary: color || "black" } }}>
      <EInput
        inputStyle={styles.input}
        containerStyle={styles.container}
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
        iconContainerStyle={styles.icon}
        placeholder={placeholder}
        label={label}
        {...others}
      />
    </ThemeProvider>
  );
}
