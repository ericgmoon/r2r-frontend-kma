// import { text, boolean } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Input } from "@r2r/common";

storiesOf("Button", module).add("Input", () => <Input />);
