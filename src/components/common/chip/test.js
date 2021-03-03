import React from "react";
import renderer from "react-test-renderer";
import sinon from "sinon";
import { shallow } from "enzyme";
import StyledChip from "./styles";
import Chip from "./index";

test("should not capitalise text", () => {
  const node = shallow(<Chip label="cHiP" />);
  expect(node.find(StyledChip).prop("title")).toEqual("cHiP");
});

test("should trigger onPress", () => {
  const callback = sinon.spy();
  const node = shallow(
    <Chip className="chip" onPress={callback} label="chip" />
  );
  expect(node.find(".chip")).toBeDefined();
  node.find(".chip").simulate("press");
  sinon.assert.called(callback);
});

describe("renders correctly", () => {
  test("without props", () => {
    const node = renderer.create(<Chip />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with label", () => {
    const node = renderer.create(<Chip label="chip" />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("when active", () => {
    const node = renderer.create(<Chip label="chip" active />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("when static", () => {
    const node = renderer.create(<Chip label="chip" isStatic />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("when active with custom active colour", () => {
    const node = renderer
      .create(<Chip label="chip" active activeColor="#ffdb58" />)
      .toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with custom styles", () => {
    const node = renderer
      .create(
        <Chip label="chip" chipStyle={{ paddingTop: 32, paddingButton: 32 }} />
      )
      .toJSON();
    expect(node).toMatchSnapshot();
  });
});
