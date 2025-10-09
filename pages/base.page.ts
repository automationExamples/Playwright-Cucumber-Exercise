import { Page, expect } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  protected readonly errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  public async validateErrorMessage(expectedMessage: string) {
    const actualMessage = (await this.page.locator(this.errorMessage).textContent())?.trim();
    if (!actualMessage?.includes(expectedMessage)) {
      throw new Error(`Expected error message '${expectedMessage}' but got '${actualMessage}'`);
    }
  }
}