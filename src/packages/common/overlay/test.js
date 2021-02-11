import React from "react";
import renderer from "react-test-renderer";
import sinon from "sinon";
import { shallow } from "enzyme";
import Overlay from "./index";

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
