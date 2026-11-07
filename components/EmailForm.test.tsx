import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmailForm from "./EmailForm";

describe("EmailForm component", () => {
  it("renders correctly for hero source with Claim Spot button", () => {
    render(<EmailForm source="hero" />);

    const input = screen.getByPlaceholderText("your@email.com");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Claim Spot/i });
    expect(button).toBeInTheDocument();
  });

  it("renders correctly for waitlist source with Reserve My Spot button", () => {
    render(<EmailForm source="waitlist" />);

    const button = screen.getByRole("button", { name: /Reserve My Spot/i });
    expect(button).toBeInTheDocument();
  });

  it("submits form and displays confirmation toast for hero source", () => {
    render(<EmailForm source="hero" />);

    const input = screen.getByPlaceholderText("your@email.com");
    fireEvent.change(input, { target: { value: "developer@example.com" } });

    const form = input.closest("form")!;
    fireEvent.submit(form);

    expect(screen.getByText("✓ You're on the list. Invite incoming.")).toBeInTheDocument();
  });

  it("submits form and displays confirmation toast for waitlist source", () => {
    render(<EmailForm source="waitlist" />);

    const input = screen.getByPlaceholderText("your@email.com");
    fireEvent.change(input, { target: { value: "developer@example.com" } });

    const form = input.closest("form")!;
    fireEvent.submit(form);

    expect(screen.getByText("✓ Spot reserved. JARVIS awaits you.")).toBeInTheDocument();
  });
});

