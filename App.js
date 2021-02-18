import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StorybookUIRoot from "./storybook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>If you can see this text, the app is working!</Text>
    </View>
  );
}

export default process.env["REACT_NATIVE_STORYBOOK"] ? StorybookUIRoot : App;
