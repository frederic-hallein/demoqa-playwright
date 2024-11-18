import { test, expect } from '../../fixtures.ts';

import { person }       from "../../data/user-credentials.json";


test.use({ storageState: './tests/.auth/user-auth.json'});
test.describe("Tests of the 'Elements' page exercises", () => {

  test.beforeEach(async ({ page }) => { await page.goto(''); });

  test('Text Box - Fill in Text box and submit', async ({ page, homePage, elementsPage }) => {
    await homePage.clickElementsButton();
    await elementsPage.selectTextBoxTab();
    await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();

    await elementsPage.fillTextBox(person);
    await elementsPage.clickSubmitButton();
    await expect(page.locator('#name')).toContainText(person.fullName);
    await expect(page.locator('#email')).toContainText(person.email);
    await expect(page.locator('.border #currentAddress')).toContainText(person.currentAddress);
    await expect(page.locator('.border #permanentAddress')).toContainText(person.permanentAddress);

  });

  test('Check Box - Select check box', async ({ page, homePage, elementsPage }) => {
    await homePage.clickElementsButton(); 
    await elementsPage.selectCheckBoxTab();
    await expect(page.getByRole("heading", { name: "Check Box"})).toHaveText("Check Box");

    let folderNames:string[] = ["Desktop", "Veu", "Private", "Word File.doc"];
    for (var folderName of folderNames) {
      await elementsPage.selectFolder(folderName);
      if (!folderName.includes(".doc")) { 
        await expect(page.locator("#result")).toContainText(folderName.toLowerCase()); 
      } else { 
        let expectedFolderNameSplit:string[] = folderName.split(' ', 2);
        let folderNamePrefix:string = expectedFolderNameSplit[0].toLowerCase();
        let fileFormat:string = expectedFolderNameSplit[1].replace(".doc",'');
        folderName = folderNamePrefix + fileFormat;
        await expect(page.locator("#result")).toContainText(folderName); 
      }
    }
  });

  /*
  test('Practice Form - Fill in practice form and submit', async ({ homePage, formsPage }) => {

    await homePage.clickFormsButton();
    
    await formsPage.clickPracticeFormButton();
    await expect(formsPage.practiceFormTitle).toHaveText('Practice Form');

    await expect(formsPage.city).toBeDisabled();
    await formsPage.fillPracticeForm(student);
    await expect(formsPage.firstName).not.toBeEmpty();
    await expect(formsPage.firstName).toHaveValue(student.firstName);
    await expect(formsPage.lastName).not.toBeEmpty();
    await expect(formsPage.lastName).toHaveValue(student.lastName);
    await expect(formsPage.email).toHaveValue(student.email);
    //await expect(formsPage.gender).toBeChecked();
    await expect(formsPage.mobile).not.toBeEmpty();
    await expect(formsPage.mobile).toHaveValue(student.mobile);
    expect(/^[0-9]{10}$/.test(student.mobile)).toBeTruthy(); //check if it contains 10 digits using regex
    // TODO: assert subjects
    // TODO: assert hobbies
    // TODO: assert city not clickable before state selection
    await expect(formsPage.selectedState.filter({ hasText: student.state })).toHaveText(student.state);
    await expect(formsPage.selectedCity.filter({ hasText: student.city })).toHaveText(student.city);

    await formsPage.clickSubmitButton();

  });
  */




});







