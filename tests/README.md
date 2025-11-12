# SmartWheels Automated Testing Suite

This directory contains comprehensive automated tests for SmartWheels user journeys, with automated screenshot capture for visual regression testing and documentation.

## Overview

The testing suite covers all critical user journeys identified in our user stories documentation:

- **Quote Request Journey** - Complete quote submission process
- **Authentication Journey** - User registration, login, and profile management
- **Service Exploration Journey** - Homepage discovery and service browsing
- **Theme Studio Journey** - Website customization tools
- **Marketplace Journey** - Wheel buying/selling integration
- **Payment Journey** - Checkout and payment processing

## Test Structure

```
tests/
├── user-journeys/           # Main user journey tests
│   ├── quote-request-journey.spec.ts
│   ├── authentication-journey.spec.ts
│   ├── service-exploration-journey.spec.ts
│   └── ...
├── components/              # Component-specific tests
├── utils/                   # Test utilities and helpers
│   ├── test-helpers.ts      # Shared test utilities
│   ├── global-setup.ts      # Test environment setup
│   └── global-teardown.ts   # Cleanup and archiving
├── screenshots/             # Auto-generated screenshots
│   ├── happy-paths/         # Expected behavior screenshots
│   ├── unhappy-paths/       # Error state screenshots
│   └── regression/          # CI/CD regression screenshots
└── user-stories.md          # User story documentation
```

## Quick Start

### Prerequisites

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Install Playwright browsers:
   ```bash
   pnpm exec playwright install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

### Running Tests

#### All Tests
```bash
pnpm test
# or
pnpm run test
```

#### Critical User Journeys Only (Fast)
```bash
pnpm run test:critical
```

#### Smoke Tests (Quick Validation)
```bash
pnpm run test:smoke
```

#### Generate Screenshots Only
```bash
pnpm run test:screenshots
```

#### Debug Mode
```bash
pnpm run test:debug
```

#### UI Mode (Interactive)
```bash
pnpm run test:ui
```

#### View Test Reports
```bash
pnpm run test:report
```

## Screenshot Management

### Screenshot Categories

1. **Happy Paths** (`tests/screenshots/happy-paths/`)
   - Document expected user flows
   - Used for visual regression testing
   - Updated when design changes intentionally

2. **Unhappy Paths** (`tests/screenshots/unhappy-paths/`)
   - Error states and validation messages
   - Help debug issues during development
   - Should be consistent unless error UX changes

3. **Regression** (`tests/screenshots/regression/`)
   - Captured during CI/CD runs
   - Used to detect unintended visual changes
   - Archived automatically

### Screenshot Naming Convention

```
[step-number]-[description]-[timestamp].png
```

Examples:
- `01-homepage-hero.png`
- `02-empty-quote-form.png`
- `03-filled-registration-form.png`
- `04-login-invalid-credentials.png`

## CI/CD Integration

Tests run automatically on:
- Every push to `main` or `develop` branches
- Every pull request
- Manual trigger via GitHub Actions

### CI/CD Features

- **Parallel Execution**: Tests run across multiple browsers
- **Screenshot Archiving**: All screenshots automatically archived
- **Test Reports**: HTML reports generated and uploaded
- **Failure Notifications**: Slack/Discord notifications on failures
- **GitHub Pages**: Test reports published to GitHub Pages

## User Stories Coverage

Each test file corresponds to user stories documented in `user-stories.md`:

| Test File | User Stories | Priority | Status |
|-----------|-------------|----------|--------|
| `quote-request-journey.spec.ts` | US-003, US-004 | 🚨 Critical | ✅ Complete |
| `authentication-journey.spec.ts` | US-005, US-006, US-007 | 🚨 Critical | ✅ Complete |
| `service-exploration-journey.spec.ts` | US-001, US-002 | 🚨 Critical | ✅ Complete |
| `theme-studio-journey.spec.ts` | US-009 | ⚠️ High | 📝 Planned |
| `marketplace-journey.spec.ts` | US-010 | 📋 Medium | 📝 Planned |
| `payment-journey.spec.ts` | US-011 | 🚨 Critical | 📝 Planned |
| `unhappy-path-tests.spec.ts` | US-013, US-014, US-015 | ⚠️ High | 📝 Planned |

## Test Utilities

### Page Helpers

```typescript
import { createPageHelpers } from '../utils/test-helpers';

const helpers = createPageHelpers(page);
const { navigation, forms, auth, validation, screenshots } = helpers;

// Example usage
await navigation.navigateTo('/quote');
await forms.fillQuoteForm(testData);
await validation.expectSuccessMessage();
await screenshots.takeScreenshot(page, 'quote-submitted', 'happy-paths');
```

### Test Data

Common test data is available in `TEST_DATA` constant:

```typescript
import { TEST_DATA } from '../utils/test-helpers';

// Use predefined test data
await forms.fillQuoteForm(TEST_DATA.forms.quoteRequest);
await auth.login(TEST_DATA.users.testUser.email, TEST_DATA.users.testUser.password);
```

## Writing New Tests

### Test File Template

```typescript
import { test, expect } from '@playwright/test';
import { createPageHelpers, TEST_DATA } from '../utils/test-helpers';

test.describe('New Feature Journey', () => {
  let helpers: ReturnType<typeof createPageHelpers>;

  test.beforeEach(async ({ page }) => {
    helpers = createPageHelpers(page);
    await page.goto('/');
    await helpers.wait.waitForNetworkIdle();
  });

  test('Happy path scenario', async ({ page }) => {
    const { validation, screenshots } = helpers;

    // Test steps here
    await screenshots.takeScreenshot(page, '01-start-state', 'happy-paths');

    // Assertions
    await validation.expectElementVisible('.success-message');
  });
});
```

### Screenshot Guidelines

1. **Always capture key states**: Before/after interactions, form submissions, page loads
2. **Use descriptive names**: Include step numbers and clear descriptions
3. **Categorize properly**: Use 'happy-paths' for expected flows, 'unhappy-paths' for errors
4. **Mobile screenshots**: Test mobile viewport separately when relevant

## Troubleshooting

### Common Issues

1. **Tests failing due to timing**
   - Add `await helpers.wait.waitForNetworkIdle()` after navigation
   - Use `await helpers.wait.waitForElement(selector)` for dynamic content

2. **Screenshot differences**
   - Check if content is dynamic (dates, random data)
   - Verify viewport size consistency
   - Ensure animations are complete before screenshots

3. **Authentication issues**
   - Use test-specific user accounts
   - Clear cookies between tests if needed
   - Handle email verification flows appropriately

### Debug Commands

```bash
# Run single test file
pnpm exec playwright test quote-request-journey.spec.ts

# Run with browser headed mode
pnpm exec playwright test --headed

# Run specific test by name
pnpm exec playwright test --grep "quote form validation"

# Generate code for interactions
pnpm exec playwright codegen http://localhost:3000
```

## Performance Considerations

- **Parallel Execution**: Tests run in parallel by default
- **Screenshot Optimization**: Only capture screenshots when needed
- **Selective Testing**: Use `--grep` to run specific test groups
- **CI Optimization**: Different test suites for different environments

## Contributing

1. Follow the existing test structure and naming conventions
2. Add screenshots for all significant UI states
3. Update `user-stories.md` when adding new user journeys
4. Test across all supported browsers when possible
5. Document any new test utilities in this README

## Support

- Test reports are available in `test-results/` after runs
- Screenshots are archived in `tests/screenshots/`
- CI/CD logs available in GitHub Actions
- Use `pnpm run test:debug` for interactive debugging
