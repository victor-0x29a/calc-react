import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders a text on the top", () => {
  render(<App />);
  expect(screen.getByText("Numero")).toBeInTheDocument();
});

test("render a input", () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Insira o numero...")).toBeInTheDocument();
});

test("init value '1' in input", async () => {
  render(<App />);
  const input = await screen.findByPlaceholderText("Insira o numero...");
  expect(input).toHaveDisplayValue("1");
});

test("not show element 'li' with a value in input set as '0'", async () => {
  render(<App />);
  const input = await screen.findByPlaceholderText("Insira o numero...");
  fireEvent.change(input, { target: { value: "0" } });
  expect(screen.queryAllByTestId("number-calc")).toHaveLength(0);
});

test("show element 'li' with a value > 0", async () => {
  render(<App />);
  const input = await screen.findByPlaceholderText("Insira o numero...");
  fireEvent.change(input, { target: { value: "5" } });
  expect(screen.getAllByTestId("number-calc")).toHaveLength(120);
});
