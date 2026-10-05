# SauceDemo Cypress QA Portfolio

[![Cypress tests](https://github.com/fatmamosleh/cypress-automation-project/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/fatmamosleh/cypress-automation-project/actions/workflows/cypress-tests.yml)

Modern Cypress end-to-end automation for the [SauceDemo](https://www.saucedemo.com/) e-commerce demo. The project demonstrates maintainable test organization, reusable commands, positive and negative coverage, checkout validation, and continuous integration with GitHub Actions.

## Automated coverage

### Smoke tests

- Empty and incomplete login validation
- Invalid and locked-out user validation
- Successful login
- Product sorting by ascending price
- Add and remove a product from the cart

### Regression tests

- Required checkout fields
- Successful transition to the checkout overview

### End-to-end journey

1. Log in as a standard customer
2. Add a product to the cart
3. Verify the cart contents
4. Enter checkout information
5. Review and finish the order
6. Verify the confirmation message
7. Log out and return to the login page

## Technology

- Cypress 16
- JavaScript
- Node.js 24
- GitHub Actions

## Project structure

```text
cypress/
├── e2e/
│   ├── smoke/
│   ├── regression/
│   └── journeys/
└── support/
    ├── commands.js
    └── e2e.js
```

## Run locally

Install Node.js 24, clone the repository, and run:

```bash
npm ci
npm test
```

Interactive mode:

```bash
npm run cy:open
```

Run an individual suite:

```bash
npm run test:smoke
npm run test:regression
npm run test:e2e
```

## Continuous integration

GitHub Actions runs the complete Cypress suite in Chrome on every push and pull request to `main`. It can also be started manually from the **Actions** tab.

## Test artifacts

Cypress automatically creates screenshots for failed tests under `cypress/screenshots`. Generated screenshots, downloads, videos, logs, and dependencies are excluded from source control.

## Notes

- SauceDemo is a public training application; its published demo credentials are used only for test automation.
- Tests use stable `data-test` selectors and do not contain fixed waits.
- Every test starts in an isolated browser state.
