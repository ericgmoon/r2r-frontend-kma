// if you use expo remove this line
import React from "react";
import { AppRegistry, View } from "react-native";

import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import requireContext from "require-context.macro";
import "./rn-addons";
import styles from "./styles";

import { loadStories } from "./storyLoader";

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator((Story) => (
  <View style={styles.main}>
    <Story />
  </View>
));

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
