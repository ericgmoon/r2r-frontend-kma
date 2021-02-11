import React from "react";
import sinon from "sinon";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Icon } from "react-native-elements";
import Overlay from "./index";
import Button from "../button";

test("should trigger onClosePress", () => {
  const callback = sinon.spy();
  const node = shallow(
    <Overlay className="overlay" isCloseIconVisible onClosePress={callback}>
      button
    </Overlay>
  );
  expect(node.find(".overlay")).toBeDefined();
  node.find(".overlay").find(Icon).simulate("press");
  sinon.assert.called(callback);
});

test("should trigger onPress for main button", () => {
  const callback = sinon.spy();
  const node = shallow(
    <Overlay
      className="overlay"
      button="Press Me"
      buttonProps={{ onPress: callback }}
    >
      button
    </Overlay>
  );
  expect(node.find(".overlay")).toBeDefined();
  node.find(".overlay").find(Button).simulate("press");
  sinon.assert.called(callback);
});

describe("renders correctly", () => {
  test("without props", () => {
    const node = renderer.create(<Overlay />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with title", () => {
    const node = renderer.create(<Overlay title="Title" />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with close icon", () => {
    const node = renderer.create(<Overlay isCloseIconVisible />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with custom button", () => {
    const node = renderer.create(<Overlay button="Press Me" />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with text", () => {
    const node = renderer.create(<Overlay>Button</Overlay>).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with button as child", () => {
    const node = renderer
      .create(
        <Overlay>
          <Button>Press Me</Button>
        </Overlay>
      )
      .toJSON();
    expect(node).toMatchSnapshot();
  });
});
