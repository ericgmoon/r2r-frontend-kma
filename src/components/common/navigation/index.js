import React from "react";
import { View } from "react-native";
import Chip from "@r2r/common/chip";
import styles from "./styles";

export default function Navigation({
  items,
  current,
  direction = "row",
  onNavigate,
  ...others
}) {
  return (
    <View
      style={{
        ...styles.container,
        ...{
          flexDirection: direction,
          alignItems: direction === "column" ? "flex-start" : null,
        },
      }}
      {...others}
    >
      {items.map((item) => (
        <Chip
          key={item.value}
          label={item.label}
          value={item.value}
          style={styles.chip}
          active={current === item.value}
          onPress={() => {
            onNavigate(item.value);
          }}
        />
      ))}
    </View>
  );
}
