import { test, devices, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlHol = "http://localhost:3000/hol";

test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
    viewport : { width: 414, height: 896 },
})

test.beforeAll(async () => {
    console.log('Before tests');
});



test.describe('Testing the nav bar flex rule', () => {
    test('Nav Bar Flex', async({ page }) => {
        await page.goto(urlHome)

        const nav = page.locator('.nav');

        const navDir = await nav.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(navDir);
        await expect(navDir).toBe("column");
       
        

    })

    
})


test.describe('Testing the favourite carousel on moble', () => {
    test('favourite carousel', async({ page }) => {
        await page.goto(urlHome)
        const carousel = page.locator("#faves > h2");
        console.log(carousel);
        await expect(carousel).toHaveText("Favourites");

    })

})

