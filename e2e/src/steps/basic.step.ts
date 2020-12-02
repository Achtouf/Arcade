import { AppPage } from '../app.po';
import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
  browser.waitForAngularEnabled(true);
  browser.manage().window().maximize();
});

Given('I am on the home page', async () => {
  await page.navigateTo();
});

When('I click on {string}', async (elementId: string) => {
  // Click on the target color button
  const targetElement = page.getElementById(elementId);
  await targetElement.click();
});

Then('The {string} should display {string}', async (containerID: string, value: string) => {
  // Expect that we get the correct color displayed
  const screenText = await page.getTextFromElementById(containerID);
  expect(screenText).to.equal(value);
});

Then('The {string} should have class {string}', async (elementId, className) => {
  const hasClass = await page.elementHasClass(elementId, className);
  expect(hasClass).to.equal(true);
});
