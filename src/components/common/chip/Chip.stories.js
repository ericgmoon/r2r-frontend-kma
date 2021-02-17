import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Chip } from "@r2r/common";

storiesOf("Navigation", module).add("Chip", () => (
  <Chip
    label={text("Label", "Default")}
    onPress={action("Actioned")}
    active={boolean("Active", false)}
  />
));
