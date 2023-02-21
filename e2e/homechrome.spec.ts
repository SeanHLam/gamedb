import { test, devices, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlHol = "http://localhost:3000/hol";

test.use({
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    ...devices['Desktop Chrome'],
})

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Testing the header on chrome desktop', () => {
    test('Game HoL Title', async({ page }) => {
        await page.goto(urlHome)
        await expect(page).toHaveTitle('GAME HoL');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Sean Lam")

        const metaDescriptionTwo = page.locator('meta[name="description"]')
        await expect(metaDescriptionTwo).toHaveAttribute("content", "Guess which game has the higher metacritic score")

    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.svg')

       
    })
})

