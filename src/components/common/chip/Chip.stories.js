import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Chip } from "@r2r/common";

storiesOf("Chip", module).add("Standard", () => (
  <Chip
    label={text("Label", "Default")}
    onPress={action("Actioned")}
    active={boolean("Active", false)}
    isStatic={boolean("Static", false)}
  />
));
