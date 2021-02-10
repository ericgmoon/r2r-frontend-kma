import React from "react";
import { View } from "react-native";
import styles from "./styles";

import Chip from "../common/chip";

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
          style={{ margin: 4 }}
          active={current === item.value}
        />
      ))}
    </View>
  );
}
