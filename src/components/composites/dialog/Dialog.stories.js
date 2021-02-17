import { storiesOf } from "@storybook/react-native";
import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Dialog } from "@r2r/composites";

storiesOf("Dialog", module)
  .add("Standard", () => (
    <Dialog
      data={[
        {
          name: text("Person 1 Name", "Person 1"),
          text: text("Dialog Text 1", "Lorem ipsum dolor sit amet"),
          avatar: boolean("Person 1 Avatar", true) ? "sample" : undefined,
        },
        {
          name: text("Person 2 Name", "Person 2"),
          text: text("Dialog Text 2", "Consectetur adipiscing elit"),
          avatar: boolean("Person 2 Avatar", true) ? "sample" : undefined,
          nameColor: text("Person 2 Color", "#7168d9"),
          isLeft: boolean("Person 2 Direction", true),
        },
        {
          name: text("Person 1 Name", "Person 1"),
          text: text("Dialog Text 3", "Sed do eiusmod tempor incididunt"),
          avatar: boolean("Person 1 Avatar", true) ? "sample" : undefined,
          buttonText: text("Final Button Text", "Start"),
          buttonIcon: text("Final Button Icon", "play-arrow"),
          applyCustomButtonForTruncation: boolean(
            "Apply Custom Button for Truncation",
            false
          ),
        },
      ]}
      avatars={{
        // eslint-disable-next-line global-require, import/no-unresolved
        sample: require("@r2r/assets/images/dev/sample-dialog-avatar.png"),
      }}
      onDialogFinish={() => action("Dialog ended")}
    />
  ))
  .add("Long", () => (
    <Dialog
      data={[
        {
          name: "Person 1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          avatar: "sample",
        },
        {
          name: "Person 2",
          text:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
          avatar: "sample",
          nameColor: "#7168d9",
          isLeft: true,
        },
        {
          name: "Person 1",
          text:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
          avatar: "sample",
          buttonText: text("Final Button Text", "Start"),
          buttonIcon: text("Final Button Icon", "play-arrow"),
          applyCustomButtonForTruncation: boolean(
            "Apply Custom Button for Truncation",
            false
          ),
        },
      ]}
      avatars={{
        // eslint-disable-next-line global-require, import/no-unresolved
        sample: require("@r2r/assets/images/dev/sample-dialog-avatar.png"),
      }}
      onDialogFinish={() => action("Dialog ended")}
    />
  ));
