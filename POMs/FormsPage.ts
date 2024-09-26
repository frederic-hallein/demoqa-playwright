import { Locator, Page } from "@playwright/test";

import { Student } from "../interfaces/Student";

export class FormsPage {
    private readonly page: Page;
    private readonly practiceFormButton: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly gender: Locator;
    private readonly mobile: Locator;
    private readonly birthDate: Locator;
    private readonly subjects: Locator;
    private readonly hobbies: Locator;
    private readonly currentAddress: Locator;
    private readonly state: Locator;
    private readonly city: Locator;


    public readonly practiceFormTitle: Locator;



    constructor(page: Page) {
        this.page = page;

        this.practiceFormButton = page.locator('.text').getByText('Practice Form');
        this.practiceFormTitle  = page.locator('.text-center').getByText('Practice Form');
        this.firstName          = page.locator('#firstName');
        this.lastName           = page.locator('#lastName');
        this.email              = page.locator('#userEmail');
        this.mobile             = page.locator('#userNumber');
    }

    
    async clickPracticeFormButton() { await this.practiceFormButton.click(); }

    async fillPracticeForm(student: Student) {
        await this.firstName.fill(student.firstName);
        await this.lastName.fill(student.lastName);
        await this.email.fill(student.email);
        await this.mobile.fill(student.mobile);

    }

}





