import { Locator, Page } from "@playwright/test";

import { Person } from "../interfaces/Person";

export class ElementsPage {
    private readonly textBoxButton: Locator;
    private readonly checkBoxButton: Locator;
    private readonly checkBoxFolderButton: Locator;
    private readonly fullName: Locator;
    private readonly email: Locator;
    private readonly currentAddress: Locator;
    private readonly permanentAddress: Locator;
    private readonly submitButton: Locator;
    private readonly expandAllCheckBoxes: Locator;

    public readonly textBoxTitle: Locator;
    public readonly checkBoxTitle: Locator;
    public readonly personName: Locator;
    public readonly personEmail: Locator;
    public readonly personCurrentAddress: Locator;
    public readonly personPermanentAddress: Locator;
    public readonly selectedCheckBoxes: Locator;


    constructor(page: Page) {
        this.textBoxButton          = page.getByText('Text Box');
        this.textBoxTitle           = page.getByRole('heading', { name: 'Text Box'});
        this.fullName               = page.locator('#userName');
        this.email                  = page.locator('#userEmail');
        this.currentAddress         = page.locator('#currentAddress');
        this.permanentAddress       = page.locator('#permanentAddress');
        this.submitButton           = page.locator('#submit');
        this.personName             = page.locator('.border #name')
        this.personEmail            = page.locator('.border #email')
        this.personCurrentAddress   = page.locator('.border #currentAddress')
        this.personPermanentAddress = page.locator('.border #permanentAddress')
        
        this.checkBoxButton         = page.getByText('Check Box');
        this.checkBoxTitle          = page.getByRole('heading', { name: 'Check Box'});;
        this.expandAllCheckBoxes    = page.getByRole('button', { name: "Expand all"})
        this.checkBoxFolderButton   = page.locator('.rct-text');
        this.selectedCheckBoxes     = page.locator('#result');

    }

    async clickTextBoxButton() { await this.textBoxButton.click(); }


    async fillTextBox(person: Person) {
        await this.fullName.fill(person.fullName);
        await this.email.fill(person.email);
        await this.currentAddress.fill(person.currentAddress);
        await this.permanentAddress.fill(person.permanentAddress);
    }

    async clickSubmitButton() { await this.submitButton.click(); }

    async clickCheckBoxButton() { await this.checkBoxButton.click(); }

    async clickCheckBoxFolderButton(folderName: string) { 
        await this.expandAllCheckBoxes.click();
        await this.checkBoxFolderButton.getByText(folderName).click(); 
    }


}





