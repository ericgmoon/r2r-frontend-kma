import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Button } from "@r2r/common";

storiesOf("Button", module)
  .add("Text", () => (
    <Button onPress={action("Actioned")}>{text("Text", "Default")}</Button>
  ))
  .add("Icon Right", () => <Button>😀 😎 👍 💯</Button>);
