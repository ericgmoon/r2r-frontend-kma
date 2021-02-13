import React from "react";
import { View } from "react-native";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import "./rn-addons";
import styles from "./styles";
import { loadStories } from "./storyLoader";

// Enables knobs for all stories
addDecorator(withKnobs);
addDecorator((Story) => (
  <View style={styles.main}>
    <Story />
  </View>
));

// Import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
