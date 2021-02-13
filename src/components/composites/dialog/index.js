import React from "react";
import { Text, View } from "react-native";
import { Chip } from "@r2r/common";
import styles from "./styles";

export default function Dialog(props) {
  const { label, ...others } = props;

  return (
    <View style={styles.root}>
      <View style={styles.labelContainer}>
        <Chip chipStyle={styles.label} active isStatic />
      </View>
      <View style={styles.body} {...others}>
        <Text>Hello there my name is Eric</Text>
      </View>
    </View>
  );
}
