import renderer from "react-test-renderer";
import { App } from "../src/App";
import React from "react";

it("React renders with no crash", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).not.toBeNull();
});
