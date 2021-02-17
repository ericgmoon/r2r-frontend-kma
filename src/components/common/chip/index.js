import React from "react";
import { Button } from "react-native-elements";
import styles from "./styles";

export default function Chip({ label, value, active, ...others }) {
  return (
    <Button
      value={value}
      buttonStyle={{
        ...styles.button,
        backgroundColor: active ? "#DF6A6A" : `#ECECEC`,
      }}
      titleStyle={{
        ...styles.buttonTitle,
        color: active ? "white" : "black",
      }}
      iconRight
      {...others}
      title={label}
    />
  );
}
