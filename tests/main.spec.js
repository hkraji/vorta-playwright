const { test, expect } = require('@playwright/test');

test('go to products', async ({ page }) => {
  await page.goto(process.env.URL + 'products');

  // Expects page to have a heading with the name of Installation.
  const title = await page.title();
  expect(title).toBe('Products');
});
