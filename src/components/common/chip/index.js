import React from "react";
import { View } from "react-native";
import StyledChip from "./styles";

export default function Chip({
  label,
  value,
  active,
  activeColor = "#DF6A6A",
  isStatic,
  chipStyle,
  ...others
}) {
  return (
    <View pointerEvents={isStatic ? "none" : "auto"}>
      <StyledChip
        title={label}
        value={value}
        active={active}
        activeColor={activeColor}
        chipStyle={chipStyle}
        {...others}
      />
    </View>
  );
}
