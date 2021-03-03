import React, { useState } from "react";
import { View, Text } from "react-native";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { Overlay, Button } from "@r2r/common";

storiesOf("Overlay", module).add("Overlay", () => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Button
        title="Show Overlay"
        onPress={() => {
          action("Show Overlay");
          setOpen(true);
        }}
      />
      <Overlay
        title={text("Overlay Title", "Default Title")}
        showClose
        onClose={() => {
          action("onClose");
          setOpen(false);
        }}
        buttonLabel="Button"
        buttonProps={{ icon: "send" }}
        isVisible={open}
      >
        <Text>I am the children</Text>
      </Overlay>
    </View>
  );
});
