import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('arc-root .content span')).getText() as Promise<string>;
  }

  getElementById(id: string): ElementFinder {
    return element(by.id(id));
  }

  async getTextFromElementById(id: string): Promise<string> {
    return element(by.id(id)).getText();
  }

  triggerClick(id: string): void {
    this.getElementById(id).click();
  }

  async elementHasClass(id: string, cls: string): Promise<boolean> {
    return await (this.getElementById(id)).getAttribute('class')
      .then((classes) => {
        return classes.split(' ').indexOf(cls) !== -1;
      });
  }
}
