import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlHol = "http://localhost:3000/hol";

test.use({
  browserName: "chromium",
  ...devices["iPhone XR"],
  viewport: { width: 414, height: 896 },
});

test.beforeAll(async () => {
  console.log("Before tests");
});

test.describe("Testing the random games", () => {
  test("Nav Bar Flex", async ({ page }) => {
    await page.goto(urlHol);

    await page.locator(".start").click();

    await expect(page.locator(".game")).toHaveCount(2);
  });
});

test.describe("Testing the game flex box while on mobile", () => {
  test("favourite carousel", async ({ page }) => {
    await page.goto(urlHol);
    await page.locator(".start").click();
    const gameCont = page.locator(".gameCont");

    const contStyle = await gameCont.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("flex-direction");
    });
   
    await expect(contStyle).toBe("column");
  });
});
