import renderer from "react-test-renderer";
import React from "react";
import { App } from "../src/App";

it("React renders with no crash", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).not.toBeNull();
});
