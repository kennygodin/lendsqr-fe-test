import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import LoginPage from "./login";

vi.mock("./_components/LoginForm", () => ({
  default: () => <div data-testid="login-form">Login Form Mock</div>,
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("LoginPage", () => {
  it("renders the page with logo and images", () => {
    render(<LoginPage />, { wrapper: Wrapper });

    const logos = screen.getAllByAltText("lendsqr");
    expect(logos).toHaveLength(2);

    expect(screen.getByAltText("pablo-sign-in")).toBeInTheDocument();
  });

  it("renders welcome text", () => {
    render(<LoginPage />, { wrapper: Wrapper });

    expect(screen.getByText("Welcome.")).toBeInTheDocument();
    expect(screen.getByText("Enter details to login.")).toBeInTheDocument();
  });

  it("renders the LoginForm component", () => {
    render(<LoginPage />, { wrapper: Wrapper });

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });
});
