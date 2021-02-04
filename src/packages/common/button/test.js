import React from "react";
import renderer from "react-test-renderer";
import sinon from "sinon";
import { mount, shallow } from "enzyme";
import { Button as EButton } from "react-native-elements";
import Button from "./index";

test("should capitalise text", () => {
  const node = shallow(<Button>button</Button>);
  expect(node.find(EButton).prop("title")).toEqual("BUTTON");
});

test("should trigger onPress", () => {
  const callback = sinon.spy();
  const node = shallow(
    <Button className="common-button" onPress={callback}>
      button
    </Button>
  );
  expect(node.find(".common-button")).toBeDefined();
  node.find(".common-button").simulate("click");
  sinon.assert.called(callback);
});
/**
describe("renders correctly", () => {
  test("without props", () => {
    const node = renderer.create(<Button>Button</Button>).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with icon", () => {
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
 */
