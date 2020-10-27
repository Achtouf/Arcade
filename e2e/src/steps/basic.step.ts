import { AppPage } from '../app.po';
import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given('I am on the home page', async () => {
    await page.navigateTo();
});

When('I click on {string}', async (elementId: string) => {
    // Click on the increment button x times.
    const targetElement = page.getElementById(elementId);
    await targetElement.click();
});

Then('The {string} should display {string}', async (containerID: string, value: string) => {
    // Expect that we get the correct value showing
    const screenText = await page.getTextFromElementById(containerID);
    expect(screenText).to.equal(value);
});
