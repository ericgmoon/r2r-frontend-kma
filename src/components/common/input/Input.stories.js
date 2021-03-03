import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Input } from "@r2r/common";
import { text } from "@storybook/addon-actions";

storiesOf("Input", module).add("Standard", () => (
  <Input label={text("Label", null)} />
));
