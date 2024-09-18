import { test, expect } from '@playwright/test';
import { HomePage } from '../../POMs/HomePage';

//let homePage: HomePage;

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
});


test('Fill in Text box and submit', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
  await homePage.clickElementsButton();
  // TODO: add assert
});