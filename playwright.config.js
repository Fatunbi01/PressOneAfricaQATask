// playwright.config.js
// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './e2e',  // 👈 Make sure this points to your test folder
//   timeout: 30000,
//   use: {
//     headless: true,
//     baseURL: 'http://localhost:3000', // Update this if your app runs on a different port
//   },
// });

// const { defineConfig } = require('@playwright/test');

// module.exports = defineConfig({
//   testDir: './e2e',
//   fullyParallel: true,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,
//   workers: process.env.CI ? 1 : undefined,
//   reporter: 'html',
//   use: {
//     trace: 'on-first-retry',
//     baseURL: 'http://localhost:3000',
//   },
//   webServer: {
//     command: 'npm run dev',
//     url: 'http://localhost:3000',
//     reuseExistingServer: !process.env.CI,
//   },
// });
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    timeout: 120000, // Increase timeout to 2 minutes
    reuseExistingServer: true
  }
});