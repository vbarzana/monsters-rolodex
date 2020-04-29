import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders a card list", () => {
  const {container} = render(<App />);
  expect(container.querySelector(".card-list")).not.toBe(null);
});
