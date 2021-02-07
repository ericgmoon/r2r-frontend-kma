import React from "react";
import { Button, ThemeProvider } from "react-native-elements";
import styles from "./styles";

export default function Chip(props) {
  const { children, label, value, color, active, ...others } = props;

  return (
    <ThemeProvider theme={{
      colors: { primary: active ? "#DF6A6A" : `#ECECEC` } }}>
      <Button
        buttonStyle={styles.button}
        titleStyle={{
          ...styles.buttonTitle,
          color: active ? 'white' : 'black'
        }}
        iconRight
        {...others}
        title={label}
      />
    </ThemeProvider>
  );
}
