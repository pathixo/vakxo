import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Countdown from "./Countdown";

describe("Countdown component", () => {
  it("renders all countdown labels", () => {
    render(<Countdown />);

    expect(screen.getByText("Days")).toBeInTheDocument();
    expect(screen.getByText("Hrs")).toBeInTheDocument();
    expect(screen.getByText("Min")).toBeInTheDocument();
    expect(screen.getByText("Sec")).toBeInTheDocument();
  });

  it("renders four numeric values formatted as two digits", () => {
    const { container } = render(<Countdown />);
    const values = container.querySelectorAll(".font-sans");
    expect(values).toHaveLength(4);

    values.forEach((val) => {
      expect(val.textContent).toMatch(/^\d{2,}$/);
    });
  });
});

