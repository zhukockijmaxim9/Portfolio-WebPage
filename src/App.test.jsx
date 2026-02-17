import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

vi.mock("./pages/MainPage", () => ({
  default: () => <div>Main page</div>,
}));

vi.mock("./pages/Particles", () => ({
  default: () => <div>Projects page</div>,
}));

test("renders main route", () => {
  render(<App />);
  expect(screen.getByText("Main page")).toBeInTheDocument();
});
