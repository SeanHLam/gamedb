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


test.describe('Testing the start screen', () => {
    test('Checking the start title', async({ page }) => {
        await page.goto(urlHol)
        
        await expect(page.locator('.start-text')).toHaveText("Guess which game has the higher metacritic score");
    })

    test('Count number of h2 elements on the page', async({ page }) => {
        await page.goto(urlHol)

        await expect(page.locator('div > h2')).toHaveCount(4);
    })

})

