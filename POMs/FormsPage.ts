import { expect, Locator, Page } from "@playwright/test";

import { Student } from "../interfaces/Student";

export class FormsPage {
    private readonly page: Page;
    private readonly practiceFormButton: Locator;
    private readonly email: Locator;
    private readonly gender: Locator;
    private readonly birthDate: Locator;
    private readonly subjects: Locator;
    private readonly hobbies: Locator;
    private readonly currentAddress: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    
    
    public readonly firstName: Locator;
    public readonly lastName: Locator;
    public readonly mobile: Locator;
    public readonly practiceFormTitle: Locator;



    constructor(page: Page) {
        this.page = page;

        this.practiceFormButton = page.locator('.text').getByText('Practice Form');
        this.practiceFormTitle  = page.locator('.text-center').getByText('Practice Form');
        this.firstName          = page.locator('#firstName');
        this.lastName           = page.locator('#lastName');
        this.email              = page.locator('#userEmail');
        this.gender             = page.locator('.custom-radio');
        this.mobile             = page.locator('#userNumber');
        this.birthDate          = page.locator('#dateOfBirthInput')
    }

    
    async clickPracticeFormButton() { await this.practiceFormButton.click(); }

    async fillPracticeForm(student: Student) {
        await this.firstName.fill(student.firstName);
        await this.lastName.fill(student.lastName);
        await this.email.fill(student.email);
        let genderSelection: string = '#gender-radio-';
        if      (student.gender === 'Male')   { genderSelection += '1'; } 
        else if (student.gender === 'Female') { genderSelection += '2'; } 
        else                                  { genderSelection += '3'; }     
        await this.gender.filter({ has: this.page.locator(genderSelection) }).click();
        await this.mobile.fill(student.mobile);

    }

}





