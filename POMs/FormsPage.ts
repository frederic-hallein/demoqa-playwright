import { Locator, Page } from "@playwright/test";

import { Student } from "../interfaces/Student";

export class FormsPage {
    private readonly page: Page;
    private readonly practiceFormButton: Locator;
    private readonly birthDate: Locator;
    private readonly subjects: Locator;
    private readonly currentAddress: Locator;
    private readonly submitButton: Locator;

    
    public readonly practiceFormTitle: Locator;
    public readonly firstName: Locator;
    public readonly lastName: Locator;
    public readonly email: Locator;
    public          gender: Locator;
    public readonly mobile: Locator;
    public          hobby: Locator;
    public readonly state: Locator;
    public readonly selectedState: Locator;
    public readonly city: Locator;
    public readonly selectedCity: Locator;




    constructor(page: Page) {
        this.page = page;

        this.practiceFormButton = page.getByText('Practice Form');
        this.practiceFormTitle  = page.getByRole('heading', { name: 'Practice Form'});
        this.firstName          = page.locator('#firstName');
        this.lastName           = page.locator('#lastName');
        this.email              = page.locator('#userEmail');
        this.mobile             = page.locator('#userNumber');
        this.birthDate          = page.locator('#dateOfBirthInput')
        this.subjects           = page.locator('#subjectsInput');
        this.currentAddress     = page.locator('#currentAddress');
        this.state              = page.locator('#react-select-3-input');
        this.selectedState      = page.locator('.css-1uccc91-singleValue');
        this.city               = page.locator('#react-select-4-input');
        this.selectedCity       = page.locator('.css-1uccc91-singleValue');
        this.submitButton       = page.locator('#submit');

    }

    
    async clickPracticeFormButton() { await this.practiceFormButton.click(); }

    async fillPracticeForm(student: Student) {
        await this.firstName.fill(student.firstName);
        await this.lastName.fill(student.lastName);
        await this.email.fill(student.email);
        this.gender = this.page.getByText(student.gender);
        await this.gender.check();
        await this.mobile.fill(student.mobile);

        for (var subject of student.subjects) {
            await this.subjects.fill(subject);
            await this.subjects.press('Enter');
        }

        for (var hobby of student.hobbies) { await this.page.getByText(hobby).check(); }
        
        await this.currentAddress.fill(student.currentAddress);
        await this.state.fill(student.state);
        await this.state.press('Enter');
        await this.city.fill(student.city);
        await this.city.press('Enter');
        await this.submitButton.click();
        

    }

}





