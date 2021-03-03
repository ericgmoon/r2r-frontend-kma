import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";
import Overlay from "./index";
import Button from "../button";

test("should trigger onClosePress", () => {
  const callback = sinon.spy();
  const node = mount(
    <Overlay className="overlay" isVisible showClose onClose={callback}>
      Some text
    </Overlay>
  );
  expect(node.find(".overlay")).toBeDefined();
  node
    .find(".overlay")
    .findWhere((n) => n.prop("testID") === "closeButton")
    .first()
    .props()
    .onPress();
  sinon.assert.called(callback);
});

test("should trigger onPress for main button", () => {
  const callback = sinon.spy();
  const node = mount(
    <Overlay
      className="overlay"
      isVisible
      buttonLabel="Press Me"
      buttonProps={{ onPress: callback }}
    >
      Button
    </Overlay>
  );
  expect(node.find(".overlay")).toBeDefined();
  node
    .find(".overlay")
    .findWhere((n) => n.prop("testID") === "mainOverlayButton")
    .first()
    .props()
    .onPress();
  sinon.assert.called(callback);
});

describe("renders correctly", () => {
  test("without props", () => {
    const node = renderer.create(<Overlay isVisible />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with title", () => {
    const node = renderer.create(<Overlay isVisible title="Title" />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with close icon", () => {
    const node = renderer
      .create(<Overlay isVisible isCloseIconVisible />)
      .toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with custom button", () => {
    const node = renderer
      .create(<Overlay isVisible buttonLabel="Press Me" />)
      .toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with text", () => {
    const node = renderer.create(<Overlay isVisible>Button</Overlay>).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with button as child", () => {
    const node = renderer
      .create(
        <Overlay isVisible>
          <Button>Press Me</Button>
        </Overlay>
      )
      .toJSON();
    expect(node).toMatchSnapshot();
  });
});
