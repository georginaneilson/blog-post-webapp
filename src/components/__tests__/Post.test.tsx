import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Post, { PostItem } from "../Post";

describe("Post component", () => {
  const mockPost: PostItem = {
    id: 1,
    title: "Test Post Title",
    body: "This is the body of the test post.",
    userId: 99,
  };

  it("renders the post title and body", () => {
    const mockHandleDelete = vi.fn();
    render(
      <Post post={mockPost} handleDelete={mockHandleDelete} error={false} />
    );

    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
    expect(
      screen.getByText("This is the body of the test post.")
    ).toBeInTheDocument();
  });

  it("calls handleDelete with correct ID when delete button is clicked", async () => {
    const mockHandleDelete = vi.fn();
    render(
      <Post post={mockPost} handleDelete={mockHandleDelete} error={false} />
    );

    const deleteButton = screen.getByRole("button", { name: /delete post/i });

    await userEvent.click(deleteButton);

    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
    expect(mockHandleDelete).toHaveBeenCalledWith(1);
  });

  it("displays error message when error prop is true", () => {
    const mockHandleDelete = vi.fn();
    render(
      <Post post={mockPost} handleDelete={mockHandleDelete} error={true} />
    );

    expect(
      screen.getByText("Error deleting post, please try again")
    ).toBeInTheDocument();
  });
});
