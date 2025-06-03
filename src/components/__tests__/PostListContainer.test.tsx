import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostListContainer from "../PostListContainer";
import { act } from "react";

// Mock data
const mockPosts = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post",
    userId: 1,
  },
  {
    id: 2,
    title: "Second Post",
    body: "Another one",
    userId: 2,
  },
];

let mockDeletePostData = 200;

// Mock API functions
// TODO: in future rather than mock the api, we should use a mock server like MSW
vi.mock("../../services/jsonPlaceholder", () => ({
  getPostsData: () => Promise.resolve(mockPosts),
  deletePostData: () => mockDeletePostData,
}));

describe("PostListContainer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("matches the snapshot", () => {
    const result = render(<PostListContainer />);
    expect(result).toMatchSnapshot();
  });

  it("fetches and renders posts", async () => {
    render(<PostListContainer />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("First Post")).toBeInTheDocument();
      expect(screen.getByText("Second Post")).toBeInTheDocument();
    });
  });

  it("filters posts based on search input", async () => {
    render(<PostListContainer />);

    const searchInput = screen.getByPlaceholderText(/search/i);

    await act(async () => {
      await userEvent.type(searchInput, "First");
    });

    await waitFor(() => {
      expect(screen.getByText("First Post")).toBeInTheDocument();
      expect(screen.queryByText("Second Post")).not.toBeInTheDocument();
    });
  });

  it("deletes a post and updates the UI", async () => {
    render(<PostListContainer />);

    await waitFor(() => {
      expect(screen.getByText("First Post")).toBeInTheDocument();
      expect(screen.getByText("Second Post")).toBeInTheDocument();
    });

    const deleteButtons = screen.getAllByRole("button", {
      name: /delete post/i,
    });

    await act(async () => {
      await userEvent.click(deleteButtons[0]);
    });
    await waitFor(() => {
      expect(screen.queryByText("First Post")).not.toBeInTheDocument();
      expect(screen.getByText("Second Post")).toBeInTheDocument();
    });
  });

  it("displays an error when the delete fails", async () => {
    mockDeletePostData = 404;
    render(<PostListContainer />);

    await waitFor(() => {
      expect(screen.getByText("First Post")).toBeInTheDocument();

      expect(
        screen.queryByText("Error deleting post, please try again")
      ).not.toBeInTheDocument();
    });

    const deleteButtons = screen.getAllByRole("button", {
      name: /delete post/i,
    });

    await act(async () => {
      await userEvent.click(deleteButtons[0]);
    });
    await waitFor(() => {
      expect(screen.getByText("First Post")).toBeInTheDocument();
      expect(
        screen.getByText("Error deleting post, please try again")
      ).toBeInTheDocument();
    });
  });
});
