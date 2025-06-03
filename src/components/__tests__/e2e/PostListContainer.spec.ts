import { Page } from "playwright";
import { expect, test } from "playwright/test";

test.describe("ListContainer Component", () => {
  test.beforeEach(async ({ page }: { page: Page }) => {
    await page.goto("http://localhost:5173");
  });

  test("renders list of posts", async ({ page }: { page: Page }) => {
    await expect(page.getByRole("textbox")).toBeVisible();
    await expect(page.locator("h2")).toHaveCount(100);
  });

  test("filters posts by title", async ({ page }: { page: Page }) => {
    const searchInput = page.getByRole("textbox");
    await searchInput.fill("sunt aut");

    const multipleFilteredPosts = page.locator("h2");
    await expect(multipleFilteredPosts).toHaveCount(2);
    await expect(multipleFilteredPosts.nth(0)).toHaveText(/sunt aut/i);
    await expect(multipleFilteredPosts.nth(1)).toHaveText(/sunt aut/i);

    await searchInput.fill("sunt aut facere repellat");

    const singleFilteredPost = page.locator("h2");
    await expect(singleFilteredPost).toHaveCount(1);
    await expect(singleFilteredPost).toHaveText(/sunt aut facere repellat/i);
  });

  test("deletes a post from the list", async ({ page }: { page: Page }) => {
    await expect(page.locator("h2")).toHaveCount(100);

    const deleteButtons = page.getByRole("button", { name: /delete post/i });
    await deleteButtons.first().click();

    await expect(page.locator("h2")).toHaveCount(99);
  });
});
