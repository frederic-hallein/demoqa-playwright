import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    private readonly page: Page;
    private readonly elementsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsButton = page.getByRole('heading', { name: 'Elements'});
    }
    async clickElementsButton() { await this.elementsButton.click(); }

    async goTo() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle("DEMOQA");
    }
}