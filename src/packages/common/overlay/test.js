import React from "react";
import renderer from "react-test-renderer";
import sinon from "sinon";
import { shallow } from "enzyme";
import { Button as EButton } from "react-native-elements";
import Button from "./index";

test("should capitalise text", () => {
  const node = shallow(<Button>button</Button>);
  expect(node.find(EButton).prop("title")).toEqual("BUTTON");
});

test("should trigger onPress", () => {
  const callback = sinon.spy();
  const node = shallow(
    <Overlay className="overlay" onClosePress={callback}>
      button
    </Overlay>
  );
  expect(node.find(".overlay")).toBeDefined();
  node.find(".overlay").find(".exit").simulate("press");
  sinon.assert.called(callback);
});

describe("renders correctly", () => {
  test("without props", () => {
    const node = renderer.create(<Button>Button</Button>).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with icon on right", () => {
    const node = renderer.create(<Button icon="east">Button</Button>).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with icon on left", () => {
    const node = renderer
      .create(
        <Button icon="east" iconLeft>
          Button
        </Button>
      )
      .toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with custom styles", () => {
    const node = renderer
      .create(
        <Button icon="east" buttonStyle={{ paddingTop: 32, paddingButton: 32 }}>
          Button
        </Button>
      )
      .toJSON();
    expect(node).toMatchSnapshot();
  });
});
