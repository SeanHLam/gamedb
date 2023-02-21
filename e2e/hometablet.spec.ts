import { test, devices, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlHol = "http://localhost:3000/hol";

test.use({
    browserName: 'chromium',
    ...devices["iPad Air"],
    viewport : { width: 820, height: 1180 },
})

test.beforeAll(async () => {
    console.log('Before tests');
});


test.describe('Testing the nav bar on tablet', () => {
    test('Nav Bar Image', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('.nav > img')).toHaveAttribute('src', '/_next/image?url=%2Flogo.png&w=640&q=75')
        await expect(page.locator('.nav > img')).toHaveAttribute('alt', 'logo')

    })

})

test.describe('Testing the nav bar flex rule', () => {
    test('Nav Bar Flex', async({ page }) => {
        await page.goto(urlHome)

        const nav = page.locator('.nav');

        const navDir = await nav.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(navDir);
        expect(navDir).toBe("row");
       
        

    })

    
})
