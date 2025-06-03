import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { vi } from "vitest";
import SearchBar from "../SearchBar";
describe("SearchBar", () => {
  it("renders correctly with given search value", () => {
    render(<SearchBar searchValue="test" handleSearch={vi.fn()} />);

    const input = screen.getByPlaceholderText(
      "Search blog posts...",
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("test");
  });

  it("should fire callback onChange", async () => {
    const mockHandleSearch = vi.fn();
    render(<SearchBar searchValue="" handleSearch={mockHandleSearch} />);
    const searchBar = screen.getByRole("textbox");
    expect(mockHandleSearch).not.toHaveBeenCalled();
    await userEvent.type(searchBar, "New Change");
    expect(mockHandleSearch).toHaveBeenCalled();
  });

  it("renders the search icon", () => {
    render(<SearchBar searchValue="" handleSearch={vi.fn()} />);

    const svgIcon = screen.getByRole("img", { hidden: true });
    expect(svgIcon).toBeInTheDocument();
  });
});
