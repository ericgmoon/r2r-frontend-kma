import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import styles from "./styles";

export default function Chip({ label, value, active, ...rest }) {
  return (
    <ThemeProvider
      theme={{
        colors: { primary: active ? "#DF6A6A" : `#ECECEC` },
      }}
    >
      <Button
        value={value}
        buttonStyle={styles.button}
        titleStyle={{
          ...styles.buttonTitle,
          color: active ? "white" : "black",
        }}
        iconRight
        {...rest}
        title={label}
      />
    </ThemeProvider>
  );
}
