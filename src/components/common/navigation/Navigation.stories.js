import React, { useState } from "react";
import { select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { Navigation } from "@r2r/common";

const items = [
  { label: "Item 1", value: "item-1" },
  { label: "Item 2", value: "item-2" },
  { label: "Item 3", value: "item-3" },
  { label: "Item 4", value: "item-4" },
];

storiesOf("Navigation", module)
  .add("Navigation", () => {
    return (
      <Navigation
        items={items}
        current={select(
          "Current Item",
          items.map((item) => item.value),
          items.map((item) => item.value).shift()
        )}
        onNavigate={(e) => {
          action(e);
        }}
      />
    );
  })
  .add("State Navigation", () => {
    const [current, setCurrent] = useState(
      items.map((item) => item.value).shift()
    );
    return (
      <Navigation
        items={items}
        current={current}
        onNavigate={(e) => {
          setCurrent(e);
          action(e);
        }}
      />
    );
  });
