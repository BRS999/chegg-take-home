import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it("render without crashing", () => {
    shallow(<App />);
  });
});
