import React from "react";
import renderer from "react-test-renderer";
import Input from "./index";

describe("renders correctly", () => {
  test("without props", () => {
    const node = renderer.create(<Input />).toJSON();
    expect(node).toMatchSnapshot();
  });

  test("with custom styles", () => {
    const node = renderer
      .create(<Input style={{ paddingTop: 32, paddingButton: 32 }} />)
      .toJSON();
    expect(node).toMatchSnapshot();
  });
});
