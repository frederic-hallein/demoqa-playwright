import { Locator, Page } from "@playwright/test";

export class HomePage {
    private readonly page          : Page;
    private readonly elementsButton: Locator;
    private readonly formsButton   : Locator;

    constructor(page: Page) {
        this.page           = page;
        this.elementsButton = page.getByRole('heading', { name: 'Elements'});
        this.formsButton    = page.getByRole('heading', { name: 'Forms'});
    }

    async navigateTo() { await this.page.goto('/'); }
    async clickElementsButton() { await this.elementsButton.click(); }
    async clickFormsButton() { await this.formsButton.click(); }

}