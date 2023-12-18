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

### Run the tessts

```
npm run test
```

### Other options

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test
