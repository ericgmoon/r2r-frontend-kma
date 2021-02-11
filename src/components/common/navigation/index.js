import React from "react";
import { View } from "react-native";
import { Chip } from "@r2r/common";
import styles from "./styles";

export default function Navigation({ items, current, direction = "row" }) {
  return (
    <View
      style={{
        ...styles.container,
        ...{
          flexDirection: direction,
          alignItems: direction === "column" ? "flex-start" : null,
        },
      }}
    >
      {items.map((item) => (
        <Chip
          label={item.label}
          value={item.value}
          style={styles.chip}
          active={current === item.value}
        />
      ))}
    </View>
  );
}
