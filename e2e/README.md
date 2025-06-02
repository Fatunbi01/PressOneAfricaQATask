# E2E Test Notes for Todo App

## Flakiness Handling
- Used Playwright's built-in assertions like 'toHaveURL', 'toHaveCount' and 'toContainText', which automatically retry.
- Waited for DOM updates using locators instead of manual waits or delays.

## Test Failure Reporting
- Playwright automatically generates a detailed HTML report with video and trace when a test fails.
- Run: 'npx playwright test --reporter=html'
- Can integrate with Slack or email notifications in CI for alerting stakeholders.

## CI Integration
- Easily integrated into GitHub Actions, GitLab CI, or Jenkins.
- Recommended: run 'npx playwright install --with-deps' in CI setup step.
- Add Playwright test step to CI pipeline:  
  ```yaml
  - name: Run Playwright E2E Tests
    run: npx playwright test