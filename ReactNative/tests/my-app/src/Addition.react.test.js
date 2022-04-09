import React from "react";
import renderer from "react-test-renderer";
import addition from "./Addition.js";

describe("Function addition", () => {
  it("add 4 + 2 = 6", () => {
    expect(addition(4, 2)).toEqual(6);
  });

  it("add 4 + 9 = 13", () => {
    expect(addition(4, 9)).toEqual(13k);
  });
});
