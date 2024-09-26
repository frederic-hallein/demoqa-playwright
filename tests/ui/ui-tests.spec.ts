import { test, expect } from '@playwright/test';
import { HomePage } from '../../POMs/HomePage';
import { NextPage } from '../../POMs/NextPage';


let person = { 
  fullName: "Peter Griffin",
  email: "peter@gmail.com",
  currentAddress: "peter's current adress",
  permanentAddress: "peter's permanent adress"
};

let homePage: HomePage;
let nextPage: NextPage;

test.describe('UI tests', () => {

  test.beforeAll(async ({ page }) => {
    homePage = new HomePage(page);
    nextPage = new NextPage(page);
  });

  test.beforeEach(async () => {
    await homePage.goTo();
  });

  test('Text Box - Fill in Text box and submit', async () => {
    await homePage.clickElementsButton();

    await nextPage.clickTextBoxButton();
    await expect(nextPage.textBoxTitle).toHaveText('Text Box');
    
    await nextPage.fillTextBox(person);

    await nextPage.clickSubmitButton();
    await expect(nextPage.personName).toContainText(person.fullName);
    await expect(nextPage.personEmail).toContainText(person.email);
    await expect(nextPage.personCurrentAddress).toContainText(person.currentAddress);
    await expect(nextPage.personPermanentAddress).toContainText(person.permanentAddress);

  });

  //TODO : take selecting parent node into account
  test('Check Box - Select check box', async () => {

    await homePage.clickElementsButton();
    
    await nextPage.clickCheckBoxButton();
    await expect(nextPage.checkBoxTitle).toHaveText('Check Box');
    
    let folderNames:string[] = ['Veu', 'Private', 'Word File.doc'];
    for (var folderName of folderNames) {
      await nextPage.clickCheckBoxFolderButton(folderName);

      if (!folderName.includes('.doc')) { 
        await expect(nextPage.selectedCheckBoxes).toContainText(folderName.toLowerCase()); 
      } else { 
        let expectedFolderNameSplit:string[] = folderName.split(" ", 2);
        let folderNamePrefix:string = expectedFolderNameSplit[0].toLowerCase();
        let fileFormat:string = expectedFolderNameSplit[1].replace('.doc','');
        folderName = folderNamePrefix + fileFormat;
        await expect(nextPage.selectedCheckBoxes).toContainText(folderName); 
      }

    }


  });

  
  test('Practice Form - Fill in practice form and submit', async () => {

    await homePage.clickFormsButton();
    
    await nextPage.clickPracticeFormButton();
    await expect(nextPage.practiceFormTitle).toHaveText('Practice Form');


  });





});







