import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import EmailForm from "./EmailForm";

describe("EmailForm component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

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

  it("submits form and displays confirmation toast for hero source", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);

    render(<EmailForm source="hero" />);

    const input = screen.getByPlaceholderText("your@email.com");
    fireEvent.change(input, { target: { value: "developer@example.com" } });

    const form = input.closest("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText("✓ You're on the list. Invite incoming.")).toBeInTheDocument();
    });
  });

  it("submits form and displays confirmation toast for waitlist source", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);

    render(<EmailForm source="waitlist" />);

    const input = screen.getByPlaceholderText("your@email.com");
    fireEvent.change(input, { target: { value: "developer@example.com" } });

    const form = input.closest("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText("✓ Spot reserved. JARVIS awaits you.")).toBeInTheDocument();
    });
  });

  it("displays error toast when API returns an error", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Please enter a valid email address." }),
    } as Response);

    render(<EmailForm source="hero" />);

    const input = screen.getByPlaceholderText("your@email.com");
    fireEvent.change(input, { target: { value: "invalid-email" } });

    const form = input.closest("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    });
  });
});
