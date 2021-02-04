import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/packages/common/button"
import Input from "./src/packages/common/input"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>If you can see this text, the app is working!</Text>
    </View>
  );
}
