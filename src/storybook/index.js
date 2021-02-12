// if you use expo remove this line
import React from "react";
import { AppRegistry, View } from "react-native";

import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { loadStories } from "./storyLoader";

import "./rn-addons";
import styles from "./styles";

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator((story) => <View style={styles.main}>{story()}</View>);

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI();

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
