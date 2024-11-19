import { expect, Locator, Page } from "@playwright/test";

export class FormsPage {
    private readonly page           : Page;
    private readonly practiceFormTab: Locator;
    private readonly firstName      : Locator;
    private readonly lastName       : Locator;
    private readonly email          : Locator;
    private          gender         : Locator;
    private readonly mobile         : Locator;
    private readonly dateOfBirth    : Locator;
    private readonly subjects       : Locator;
    private readonly picture        : Locator;
    private readonly currentAddress : Locator;
    private readonly state          : Locator;
    private          selectedState  : Locator;
    private readonly city           : Locator;
    private          selectedCity   : Locator;
    private readonly submitButton   : Locator;

    // assertion locators
    private readonly practiceFormTitle: Locator;

    constructor(page: Page) {
        this.page            = page;
        this.practiceFormTab = page.getByText("Practice Form");
        this.firstName       = page.locator("#firstName");
        this.lastName        = page.locator("#lastName");
        this.email           = page.locator("#userEmail");
        this.mobile          = page.locator("#userNumber");
        this.dateOfBirth     = page.locator("#dateOfBirthInput");
        this.subjects        = page.locator("#subjectsInput");
        this.picture         = page.locator("#uploadPicture");
        this.currentAddress  = page.locator("#currentAddress");
        this.state           = page.locator("#state svg");
        this.city            = page.locator("#city svg");
        this.submitButton    = page.locator("#submit");

        this.practiceFormTitle = page.getByRole("heading", { name: "Practice Form" });
    }

    async selectPracticeFormTab() { await this.practiceFormTab.click(); }

    async fillPracticeForm(student: {firstName: string; lastName: string; email: string; gender:string; mobile: string; 
                                     dateOfBirth: string; subjects: string[]; hobbies: string[]; picture: string; currentAddress: string; state: string; city: string }) {
        await this.firstName.fill(student.firstName);
        await this.lastName.fill(student.lastName);
        await this.email.fill(student.email);
        this.gender = this.page.getByText(student.gender);
        await this.gender.check();
        await this.mobile.fill(student.mobile);
        await this.dateOfBirth.fill(student.dateOfBirth);
        for (var subject of student.subjects) {
            await this.subjects.fill(subject);
            await this.subjects.press("Enter");
        }
        for (var hobby of student.hobbies) { await this.page.getByText(hobby).click(); }
        await this.picture.setInputFiles("./images/" + student.picture);
        await this.currentAddress.fill(student.currentAddress);
        await this.state.click();
        this.selectedState = this.page.getByText(student.state, { exact: true });
        await this.selectedState.click();
        await this.city.click();
        this.selectedCity = this.page.getByText(student.city, { exact: true });
        await this.selectedCity.click();
        
    }

    async clickSubmitButton() { await this.submitButton.click(); }

    public get getPracticeFormTitle(): Locator { return this.practiceFormTitle; }
    
    public getPracticeFormOutput(value: string): Locator { return this.page.getByRole("cell", { name: value }); }
}





