import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlHol = "http://localhost:3000/hol";

test.use({
  browserName: "chromium",
  viewport: { width: 1280, height: 720 },
  ...devices["Desktop Chrome"],
});

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe("Testing the high score button", () => {


  test("Final score styling", async ({ page }) => {
    await page.goto(urlHol);

    const score = page.locator(".high-score");

    const scoreFont = await score.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("font-size");
    });
   
    expect(scoreFont).toBe("36px");
  });
});

test.describe("Testing the start button", () => {
    test("start button", async ({ page }) => {
      await page.goto(urlHol);
      await expect(page.locator(".start")).toHaveText("Start");
    });
  

  });
