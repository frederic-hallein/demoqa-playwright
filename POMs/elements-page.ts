import { Locator, Page } from "@playwright/test";

export class ElementsPage {
    private readonly textBoxTab         : Locator;
    private readonly checkBoxTab        : Locator;
    private readonly folderCheckBox     : Locator;
    private readonly fullName           : Locator;
    private readonly email              : Locator;
    private readonly currentAddress     : Locator;
    private readonly permanentAddress   : Locator;
    private readonly submitButton       : Locator;
    private readonly expandAllCheckBoxes: Locator;
    
    // assertion locators
    private readonly textBoxTitle          : Locator;
    private readonly checkBoxTitle         : Locator;
    private readonly fullNameOutput        : Locator;
    private readonly emailOutput           : Locator;
    private readonly currentAddressOutput  : Locator;
    private readonly permanentAddressOutput: Locator;
    private readonly selectedCheckBoxes    : Locator;
    
    constructor(page: Page) {
        this.textBoxTab          = page.getByText("Text Box");
        this.checkBoxTab         = page.getByText("Check Box");
        this.folderCheckBox      = page.locator("label");
        this.fullName            = page.locator("#userName");
        this.email               = page.locator("#userEmail");
        this.currentAddress      = page.locator("#currentAddress");
        this.permanentAddress    = page.locator("#permanentAddress");
        this.submitButton        = page.locator("#submit");
        this.expandAllCheckBoxes = page.getByRole("button", { name: "Expand all"});
        
        this.textBoxTitle        = page.getByRole("heading", { name: "Text Box" });
        this.checkBoxTitle       = page.getByRole("heading", { name: "Check Box"});
        this.fullNameOutput         = page.locator("#name");
        this.emailOutput            = page.locator("#email");
        this.currentAddressOutput   = page.locator(".border #currentAddress");
        this.permanentAddressOutput = page.locator(".border #permanentAddress");
        this.selectedCheckBoxes     = page.locator("#result");
    }

    async selectTextBoxTab() { await this.textBoxTab.click(); }

    async fillTextBox(person: { fullName: string; email: string; currentAddress: string; permanentAddress: string }) {
        await this.fullName.fill(person.fullName);
        await this.email.fill(person.email);
        await this.currentAddress.fill(person.currentAddress);
        await this.permanentAddress.fill(person.permanentAddress);
    }

    async clickSubmitButton() { await this.submitButton.click(); }

    async selectCheckBoxTab() { await this.checkBoxTab.click(); }

    async selectFolder(folderName: string) { 
        await this.expandAllCheckBoxes.click();
        await this.folderCheckBox.filter({ hasText: folderName }).getByRole('img').first().click(); 
    }

    public get getTextBoxTitle(): Locator { return this.textBoxTitle; }
    
    public get getCheckBoxTitle(): Locator { return this.checkBoxTitle; }

    public get getFullNameOutput(): Locator { return this.fullNameOutput; }

    public get getEmailOutput(): Locator { return this.emailOutput; }

    public get getCurrentAddressOutput(): Locator { return this.currentAddressOutput; }
    
    public get getPermanentAddressOutput(): Locator { return this.permanentAddressOutput; }

    public get getSelectedCheckBoxes(): Locator { return this.selectedCheckBoxes; }


}





