import React from "react";
import { Button } from "react-native-elements";
import styles from "./styles";

export default function Chip({
  label,
  value,
  active,
  activeColor = "#DF6A6A",
  chipStyle,
  isStatic,
  ...others
}) {
  return (
    <Button
      value={value}
      style={{
        pointerEvents: isStatic ? "none" : "all",
      }}
      buttonStyle={{
        ...styles.button,
        backgroundColor: active ? activeColor : `#ECECEC`,
        ...chipStyle,
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
