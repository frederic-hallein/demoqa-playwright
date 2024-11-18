import { Locator, Page } from "@playwright/test";

export class ElementsPage {
    private readonly textBoxButton       : Locator;
    private readonly checkBoxButton      : Locator;
    private readonly checkBoxFolderButton: Locator;
    private readonly fullName            : Locator;
    private readonly email               : Locator;
    private readonly currentAddress      : Locator;
    private readonly permanentAddress    : Locator;
    private readonly submitButton        : Locator;
    private readonly expandAllCheckBoxes : Locator;
    
    constructor(page: Page) {
        this.textBoxButton          = page.getByText('Text Box');
        this.fullName               = page.locator('#userName');
        this.email                  = page.locator('#userEmail');
        this.currentAddress         = page.locator('#currentAddress');
        this.permanentAddress       = page.locator('#permanentAddress');
        this.submitButton           = page.locator('#submit');
        
        this.checkBoxButton         = page.getByText('Check Box');
        this.expandAllCheckBoxes    = page.getByRole('button', { name: "Expand all"})
        this.checkBoxFolderButton   = page.locator('label');
    }

    async selectTextBoxTab() { await this.textBoxButton.click(); }

    async fillTextBox(person: { fullName: string; email: string; currentAddress: string; permanentAddress: string }) {
        await this.fullName.fill(person.fullName);
        await this.email.fill(person.email);
        await this.currentAddress.fill(person.currentAddress);
        await this.permanentAddress.fill(person.permanentAddress);
    }

    async clickSubmitButton() { await this.submitButton.click(); }

    async selectCheckBoxTab() { await this.checkBoxButton.click(); }

    async selectFolder(folderName: string) { 
        await this.expandAllCheckBoxes.click();
        await this.checkBoxFolderButton.filter({ hasText: folderName }).getByRole('img').first().click(); 
    }


}





