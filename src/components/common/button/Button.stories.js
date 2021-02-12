import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Button } from "@r2r/common";

storiesOf("Button", module)
  .add("Text", () => <Button>{text("Text", "Default")}</Button>)
  .add("Icon Right", () => <Button>😀 😎 👍 💯</Button>);
