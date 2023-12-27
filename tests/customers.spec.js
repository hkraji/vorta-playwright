const { test, expect } = require('@playwright/test');

import { Customer } from "../objects/Customer";

test('go to customers', async ({ page }) => {
  await page.goto(process.env.URL + 'customers');

  const title = await page.title();
  expect(title).toBe('Customers');
});

test('click add new customer', async ({ page }) => {
  await page.goto(process.env.URL + 'customers');

  await page.locator('.ts-add-button').click();

  const title = await page.title();
  expect(title).toBe('New Customer');
});

test('create new customer', async ({ page }) => {
  const customer = new Customer(page);
  await customer.create();
  // await customer.editCustomer()
});
