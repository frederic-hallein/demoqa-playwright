import { Locator, Page } from "@playwright/test";

import { Student } from "../interfaces/Student";

export class FormsPage {
    private readonly practiceFormButton: Locator;
    private readonly email: Locator;
    private readonly birthDate: Locator;
    private readonly subjects: Locator;
    private readonly hobbies: Locator;
    private readonly currentAddress: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    
    
    public readonly page: Page;
    public readonly firstName: Locator;
    public readonly lastName: Locator;
    public readonly gender: Locator;
    public          genderSelection: string;
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
        this.subjects           = page.locator('#subjectsInput');
        this.hobbies            = page.locator('.custom-checkbox')
    }

    
    async clickPracticeFormButton() { await this.practiceFormButton.click(); }

    async fillPracticeForm(student: Student) {
        await this.firstName.fill(student.firstName);
        await this.lastName.fill(student.lastName);
        await this.email.fill(student.email);

        this.genderSelection = '';
        switch(student.gender) {
            case 'Male':
                this.genderSelection = '#gender-radio-1';
                break;
            case 'Female':
                this.genderSelection = '#gender-radio-2';
                break;
            case 'Other':
                this.genderSelection = '#gender-radio-3';
                break;
            

        }
        await this.gender.filter({ has: this.page.locator(this.genderSelection) }).click();
    
        await this.mobile.fill(student.mobile);

        // NOTE: Tab or enter doe not work
        //for (var subject of student.subjects) {
        //    await this.subjects.fill(subject);
        //    await this.page.keyboard.press('Tab');
        //}

        let hobbiesSelection: string = '';
        for (var hobby of student.hobbies) {
            switch(hobby) {
                case 'Sports':
                    hobbiesSelection = '#hobbies-checkbox-1';
                    break;
                case 'Reading':
                    hobbiesSelection = '#hobbies-checkbox-2';
                    break;
                case 'Music':
                    hobbiesSelection = '#hobbies-checkbox-3';
                    break;
                

            }
            await this.hobbies.filter({ has: this.page.locator(hobbiesSelection) }).click();
        }
   
        

    }

}





