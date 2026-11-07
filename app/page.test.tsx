import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./page";

describe("Home page", () => {
  it("renders main heading and key sections", () => {
    render(<Home />);

    expect(screen.getByText("Say It.")).toBeInTheDocument();
    expect(screen.getByText("It Happens.")).toBeInTheDocument();
    expect(screen.getByText("✦ FIRST BETA INCOMING")).toBeInTheDocument();
    expect(screen.getByText("Faster Dev Cycles")).toBeInTheDocument();
    expect(screen.getByText("The Truth.")).toBeInTheDocument();
    expect(screen.getByText(/Your Turn/i)).toBeInTheDocument();
    expect(screen.getByText(/Iron Man/i)).toBeInTheDocument();
  });
});
