import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

vi.mock("./app/AppRouter", () => ({
  default: () => <div>App router</div>,
}));

test("renders app router", () => {
  render(<App />);
  expect(screen.getByText("App router")).toBeInTheDocument();
});
