import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EButton from "react-native-elements";
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
      <Overlay title="Title" button="Button" isCloseIconVisible>
        <Text>Lorem Ipsum Dolor Sit Amet</Text>
      </Overlay>
    </View>
  );
}
