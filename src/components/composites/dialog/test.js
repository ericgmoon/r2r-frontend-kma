import React from "react";
import sinon from "sinon";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import Dialog from "./index";

describe("should trigger onDialogFinish", () => {
  const callback = sinon.spy();

  test("with one screen", () => {
    const node = mount(
      <Dialog
        content={[
          {
            name: "Person 1",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
        className="dialog"
        onDialogFinish={callback}
      />
    );
    expect(node.find(".dialog")).toBeDefined();
    node
      .find(".dialog")
      .findWhere((n) => n.prop("testID") === "nextButton")
      .first()
      .props()
      .onPress();
    sinon.assert.called(callback);
  });

  test("with multiple screens", () => {
    const node = mount(
      <Dialog
        content={[
          {
            name: "Person 1",
            text: "Lorem ipsum dolor sit amet",
          },
          {
            name: "Person 2",
            text: "Lorem ipsum dolor sit amet",
          },
        ]}
        className="dialog"
        onDialogFinish={callback}
      />
    );
    expect(node.find(".dialog")).toBeDefined();
    // Navigate to the next page
    act(async () => {
      await node
        .find(".dialog")
        .findWhere((n) => n.prop("testID") === "nextButton")
        .first()
        .props()
        .onPress();
      await sinon.assert.notCalled(callback);
    });
    // Press the end button
    node
      .find(".dialog")
      .findWhere((n) => n.prop("testID") === "nextButton")
      .first()
      .props()
      .onPress();
    sinon.assert.called(callback);
  });

  describe("renders correctly", () => {
    test("without optional props", () => {
      const node = renderer
        .create(
          <Dialog
            content={[
              {
                name: "Person 1",
                text: "Lorem ipsum dolor sit amet",
              },
              {
                name: "Person 2",
                text: "Lorem ipsum dolor sit amet",
              },
            ]}
            onDialogFinish={() => {}}
          />
        )
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    test("with long texts", () => {
      const node = renderer
        .create(
          <Dialog
            content={[
              {
                name: "Person 1",
                text: "Lorem ipsum dolor sit amet",
              },
              {
                name: "Person 2",
                text:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                name: "Person 1",
                text: "Lorem ipsum dolor sit amet",
              },
            ]}
            onDialogFinish={() => {}}
          />
        )
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    test("with custom name colors", () => {
      const node = renderer
        .create(
          <Dialog
            content={[
              {
                name: "Person 1",
                nameColor: "#6abd75",
                text: "Lorem ipsum dolor sit amet",
              },
              {
                name: "Person 2",
                nameColor: "#7274b5",
                text: "Lorem ipsum dolor sit amet",
              },
            ]}
            onDialogFinish={() => {}}
          />
        )
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    test("with avatars", () => {
      const node = renderer
        .create(
          <Dialog
            content={[
              {
                name: "Person 1",
                avatar: "sample",
                text: "Lorem ipsum dolor sit amet",
              },
              {
                name: "Person 2",
                avatar: "sample",
                isLeft: true,
                text: "Lorem ipsum dolor sit amet",
              },
              {
                name: "Person 1",
                avatar: "sample",
                text: "Lorem ipsum dolor sit amet",
              },
            ]}
            avatars={{
              // eslint-disable-next-line global-require, import/no-unresolved
              sample: require("@r2r/assets/images/dev/sample-dialog-avatar.png"),
            }}
            onDialogFinish={() => {}}
          />
        )
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    test("with custom buttons", () => {
      const node = renderer
        .create(
          <Dialog
            content={[
              {
                name: "Person 1",
                text: "Lorem ipsum dolor sit amet",
                buttonText: "Continue",
              },
              {
                name: "Person 2",
                text: "Lorem ipsum dolor sit amet",
                buttonText: "Start",
                buttonIcon: "play-arrow",
              },
            ]}
            onDialogFinish={() => {}}
          />
        )
        .toJSON();
      expect(node).toMatchSnapshot();
    });
  });
});
