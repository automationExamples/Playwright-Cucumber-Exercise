import { Locator, Page, expect } from "@playwright/test";

export class Common {
  private readonly page: Page;
  private readonly miniCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.miniCart = page.locator('[data-test="shopping-cart-link"]');
  }

  public async btnClick(text: string) {
    await this.page.getByRole("button", { name: `${text}` }).click();
  }

  public async clickOnMiniCart() {
    await this.miniCart.click();
  }

  public async validateTitle(expectedTitle: string) {
    const pageTitle = await this.page.title();
    if (pageTitle !== expectedTitle) {
      throw new Error(
        `Expected title to be ${expectedTitle} but found ${pageTitle}`
      );
    }
  }

  public async validateUrl(url: string) {
    await expect(this.page).toHaveURL(url);
  }
}
