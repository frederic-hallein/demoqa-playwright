import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://demoqa.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },

  projects: [

    {
      name: "setup",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /.*\.setup\.ts/,
    },

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: '.auth/user-auth.json',
      },
      
      dependencies: ['setup'],
    },

    //{
    //  name: 'firefox',
    //  use: { 
    //    ...devices['Desktop Firefox'],
    //    //storageState: 'playwright/.auth/user-auth.json',
    //  },
//
    //  //dependencies: ['setup'],
    //},
//
    //{
    //  name: 'webkit',
    //  use: { 
    //    ...devices['Desktop Safari'],
    //    //storageState: 'playwright/.auth/user-auth.json',
    //  },
//
    //  //dependencies: ['setup'],
    //},

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});