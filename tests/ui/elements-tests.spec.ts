import { test, expect } from "../../fixtures.ts";

import { person, student } from "../../data/user-credentials.json";


test.use({ storageState: "./tests/.auth/user-auth.json" });
test.describe("Tests of the 'Elements' page", () => {

  test.beforeEach(async ({ page }) => { await page.goto(''); });

  test("Text Box - Fill in Text box and submit", async ({ homePage, elementsPage }) => {
    await homePage.clickElementsButton();
    await elementsPage.selectTextBoxTab();
    await expect(elementsPage.getTextBoxTitle).toBeVisible();

    await elementsPage.fillTextBox(person);
    await elementsPage.clickSubmitButton();
    await expect(elementsPage.getFullNameOutput).toContainText(person.fullName);
    await expect(elementsPage.getEmailOutput).toContainText(person.email);
    await expect(elementsPage.getCurrentAddressOutput).toContainText(person.currentAddress);
    await expect(elementsPage.getPermanentAddressOutput).toContainText(person.permanentAddress);

  });

  test("Check Box - Select check box", async ({ homePage, elementsPage }) => {
    await homePage.clickElementsButton(); 
    await elementsPage.selectCheckBoxTab();
    await expect(elementsPage.getCheckBoxTitle).toHaveText("Check Box");

    let folderNames:string[] = ["Desktop", "Veu", "Private", "Word File.doc"];
    for (var folderName of folderNames) {
      await elementsPage.selectFolder(folderName);
      if (!folderName.includes(".doc")) { 
        await expect(elementsPage.getSelectedCheckBoxes).toContainText(folderName.toLowerCase()); 
      } else { 
        let expectedFolderNameSplit:string[] = folderName.split(' ', 2);
        let folderNamePrefix:string          = expectedFolderNameSplit[0].toLowerCase();
        let fileFormat:string                = expectedFolderNameSplit[1].replace(".doc",'');
        folderName = folderNamePrefix + fileFormat;
        await expect(elementsPage.getSelectedCheckBoxes).toContainText(folderName); 
      }
    }
  });

  
  test("Practice Form - Fill in practice form and submit", async ({ homePage, formsPage }) => {
    await homePage.clickFormsButton();
    await formsPage.selectPracticeFormTab();
    await expect(formsPage.getPracticeFormTitle).toBeVisible();

    await formsPage.fillPracticeForm(student);
    await formsPage.clickSubmitButton();
    await expect(formsPage.getPracticeFormOutput(student.firstName + ' ' + student.lastName)).toBeVisible();
    await expect(formsPage.getPracticeFormOutput(student.email)).toBeVisible();
    await expect(formsPage.getPracticeFormOutput(student.gender)).toBeVisible();
    await expect(formsPage.getPracticeFormOutput(student.mobile)).toBeVisible();
    const dateOfBirthSplit: string[] = student.dateOfBirth.split(' ');
    let day: string   = dateOfBirthSplit[0]; 
    let month: string = dateOfBirthSplit[1]; 
    let year: string  = dateOfBirthSplit[2]; 
    await expect(formsPage.getPracticeFormOutput(day + ' ' + month + ',' + year)).toBeVisible();
    for (var subject of student.subjects) { await expect(formsPage.getPracticeFormOutput(subject)).toBeVisible(); }
    for (var hobby   of student.hobbies)  { await expect(formsPage.getPracticeFormOutput(hobby)).toBeVisible(); }
    await expect(formsPage.getPracticeFormOutput(student.picture)).toBeVisible();
    await expect(formsPage.getPracticeFormOutput(student.currentAddress)).toBeVisible();
    await expect(formsPage.getPracticeFormOutput(student.state + ' ' + student.city)).toBeVisible();

  });
  




});







