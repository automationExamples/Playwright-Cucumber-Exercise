import { Page } from '@playwright/test';

export class Purchase {
  private readonly page: Page;
  private readonly cartButton: string = 'a.shopping_cart_link';
  private readonly checkoutButton: string = 'button[id="checkout"]';
  private readonly firstNameField: string = 'input[id="first-name"]';
  private readonly lastNameField: string = 'input[id="last-name"]';
  private readonly postalCodeField: string = 'input[id="postal-code"]';
  private readonly continueButton: string = 'input[id="continue"]';
  private readonly finishButton: string = 'button[id="finish"]';
  private readonly thankYouSelector: string = 'h2.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  public async openCart() {
    await this.page.locator(this.cartButton).click();
  }

  public async clickCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }

  public async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.firstNameField).fill(firstName);
    await this.page.locator(this.lastNameField).fill(lastName);
    await this.page.locator(this.postalCodeField).fill(postalCode);
  }

  public async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }

  public async clickFinish() {
    await this.page.locator(this.finishButton).click();
  }

  public async getThankYouText(): Promise<string> {
    return await this.page.locator(this.thankYouSelector).innerText();
  }
}
