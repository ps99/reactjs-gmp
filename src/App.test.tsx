import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Find your movie text", () => {
  render(<App />);
  const titleElement = screen.getByText(/find your movie/i);
  expect(titleElement).toBeInTheDocument();
});
