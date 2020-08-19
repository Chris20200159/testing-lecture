import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("Does not show dropdown when Header is mounted", () => {
  const { queryByTestId } = render(<Header />);

  const dropdown = queryByTestId("dropdown");

  expect(dropdown).not.toBeTruthy();
});

test("Shows dropdown when hamburger is clicked", () => {
  const { container, getByTestId } = render(<Header />);

  const hamburger = getByTestId("hamburger-button");

  fireEvent.click(hamburger);

  const dropdown = getByTestId("dropdown");

  expect(dropdown).toBeTruthy();
  expect(container.textContent).toContain("Dropdown menu");
});
