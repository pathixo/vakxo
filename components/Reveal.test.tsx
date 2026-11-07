import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Reveal from "./Reveal";

describe("Reveal component", () => {
  it("renders children content properly", () => {
    render(
      <Reveal>
        <span data-testid="test-child">Animated Content</span>
      </Reveal>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByText("Animated Content")).toBeInTheDocument();
  });

  it("applies custom class names to wrapper", () => {
    const { container } = render(
      <Reveal className="custom-test-class">
        <span>Child</span>
      </Reveal>
    );

    expect(container.firstChild).toHaveClass("custom-test-class");
  });
});

