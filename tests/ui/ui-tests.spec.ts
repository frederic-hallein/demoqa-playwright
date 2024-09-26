import { test, expect } from '@playwright/test';

import { HomePage } from '../../POMs/HomePage';
import { ElementsPage } from '../../POMs/ElementsPage';
import { FormsPage } from '../../POMs/FormsPage';

let person = { 
  fullName: "Peter Griffin",
  email: "peter@gmail.com",
  currentAddress: "peter's current adress",
  permanentAddress: "peter's permanent adress",
};


let student = {
  firstName: "Chris",
  lastName: "Griffin",
  email: "chris.griffin@gmail.com",
  gender: "Male",
  mobile: "0495 66 66 66",
  birthDay: "1 Feb 2000",
  subjects: ["Physics", "Math", "Art"],
  hobbies: ["Reading"],
  currentAddress: "Chris's current adress",
  state: "NCR",
  city: "Gurgaon"
};



let homePage: HomePage;
let elementsPage: ElementsPage;
let formsPage: FormsPage;

test.describe('UI tests', () => {

  test.beforeAll(async ({ page }) => {
    homePage     = new HomePage(page);
    elementsPage = new ElementsPage(page);
    formsPage    = new FormsPage(page);
  });

  test.beforeEach(async () => { await homePage.goTo(); });

  test('Text Box - Fill in Text box and submit', async () => {
    await homePage.clickElementsButton();

    await elementsPage.clickTextBoxButton();
    await expect(elementsPage.textBoxTitle).toHaveText('Text Box');
    
    await elementsPage.fillTextBox(person);

    await elementsPage.clickSubmitButton();
    await expect(elementsPage.personName).toContainText(person.fullName);
    await expect(elementsPage.personEmail).toContainText(person.email);
    await expect(elementsPage.personCurrentAddress).toContainText(person.currentAddress);
    await expect(elementsPage.personPermanentAddress).toContainText(person.permanentAddress);

  });

  //TODO : take selecting parent node into account
  test('Check Box - Select check box', async () => {

    await homePage.clickElementsButton();
    
    await elementsPage.clickCheckBoxButton();
    await expect(elementsPage.checkBoxTitle).toHaveText('Check Box');
    
    let folderNames:string[] = ['Veu', 'Private', 'Word File.doc'];
    for (var folderName of folderNames) {
      await elementsPage.clickCheckBoxFolderButton(folderName);

      if (!folderName.includes('.doc')) { 
        await expect(elementsPage.selectedCheckBoxes).toContainText(folderName.toLowerCase()); 
      } else { 
        let expectedFolderNameSplit:string[] = folderName.split(" ", 2);
        let folderNamePrefix:string = expectedFolderNameSplit[0].toLowerCase();
        let fileFormat:string = expectedFolderNameSplit[1].replace('.doc','');
        folderName = folderNamePrefix + fileFormat;
        await expect(elementsPage.selectedCheckBoxes).toContainText(folderName); 
      }

    }


  });

  
  test('Practice Form - Fill in practice form and submit', async () => {

    await homePage.clickFormsButton();
    
    await formsPage.clickPracticeFormButton();
    await expect(formsPage.practiceFormTitle).toHaveText('Practice Form');

    await formsPage.fillPracticeForm(student);


  });





});







