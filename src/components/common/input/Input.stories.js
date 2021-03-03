import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Input } from "@r2r/common";

storiesOf("Input", module).add("Standard", () => <Input label="Hello" />);
