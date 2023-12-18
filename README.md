# Vorta Playwright

## How to setup

Run from the console

```
npm install
```

Setup the configuration, copy `.env.example` and set your configuration

```
cp .env.example .env
```

Setup the URL, USERNAME and PASSWORD

### Run the tests

```
npm run test
```

### Useful tips

If you want to run only one test case use keyword only `.only` for an example

```
test.only('create new customer', async ({ page }) => {
  const customer = new Customer(page);
  await customer.create();
});
```

### Other options

Run with UI mode

```
npx playwright test --ui
```

Run with debug mode

```
npx playwright test --debug
```
