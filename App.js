import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/packages/navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const example = [
  {
    label: "Hair",
    value: "hair",
    active: true,
  },
  {
    label: "Skin",
    value: "skin",
  },
  {
    label: "Clothes",
    value: "clothes",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation items={example} current="skin" />
      <Text>If you can see this text, the app is working!</Text>
    </View>
  );
}
