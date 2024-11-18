import { test as base } from '@playwright/test';

import { ElementsPage } from './POMs/elements-page';
import { FormsPage }    from './POMs/forms-page';
import { HomePage }     from './POMs/home-page';

type MyFixtures = {
    elementsPage : ElementsPage;
    formsPage    : FormsPage;
    homePage     : HomePage;
};

export const test = base.extend<MyFixtures>({
    elementsPage: async ({ page }, use) => {
        const elementsPage = new ElementsPage(page);
        await use(elementsPage);
    },
    formsPage: async ({ page }, use) => {
        const formsPage = new FormsPage(page);
        await use(formsPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

});

export { expect } from '@playwright/test';
