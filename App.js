import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Overlay from "./src/packages/common/overlay";
import Button from "./src/packages/common/button";

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
      <Overlay>
        <Button>Press Me</Button>
      </Overlay>
    </View>
  );
}
