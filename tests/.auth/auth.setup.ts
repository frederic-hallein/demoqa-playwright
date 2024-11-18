import { test as setup, expect } from "../../fixtures.ts";

import path from "path";
const authFile = path.join(__dirname, "./user-auth.json");

setup("authenticate", async ({ page, homePage }) => {
    await homePage.navigateTo();
    await expect(page).toHaveTitle("DEMOQA"); 
    await page.context().storageState({ path: authFile });
});