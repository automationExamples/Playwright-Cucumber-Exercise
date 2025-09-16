import { Page, Locator, expect } from "@playwright/test";

export class CheckoutConfirmationPage {
  private readonly page: Page;

  private readonly confirmationHeader: Locator;
  private readonly completeText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmationHeader = this.page.locator('[data-test="complete-header"]');
    this.completeText = this.page.locator('[data-test="complete-text"]');

  }

  public async verifyConfirmationHeader(expectedHeader: string) {
    await expect(this.confirmationHeader).toHaveText(expectedHeader);
  }
}
