import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/packages/common/button";

export default function App() {
  return (
    <View style={styles.container}>
      <Button style={styles.button} icon="done">
        DONE
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
