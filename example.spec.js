import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('Done with tests');
});

test.afterEach(async ({ page }) => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);

    if (test.info().status !== test.info().expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});

test.describe('two tests', () => {
    test('one', async ({ page }) => {
        await page.goto('http://whatsmyuseragent.org/');
        await page.screenshot({ path: `example-${page._initializer.name}.png` });
    });

    test('two', async ({ page }) => {
        
    });
});