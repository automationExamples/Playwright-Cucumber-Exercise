import { Page } from "@playwright/test";

export class Purchase {
  private readonly page: Page;

    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly cartButton: string = ".shopping_cart_link";
  private readonly checkoutButton: string = "#checkout";
  private readonly firstNameField: string = "#first-name";
  private readonly lastNameField: string = "#last-name";
  private readonly postalCodeField: string = "#postal-code";
  private readonly continueButton: string = "#continue";
  private readonly finishButton: string = "#finish";
  private readonly successMessage: string = ".complete-header";

  constructor(page: Page) {
    this.page = page;
  }
  
    async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async openCart() {
    await this.page.locator(this.cartButton).click();
  }

  public async checkout() {
    await this.page.locator(this.checkoutButton).click();
  }

  public async fillUserInfo(first: string, last: string, zip: string) {
    await this.page.locator(this.firstNameField).fill(first);
    await this.page.locator(this.lastNameField).fill(last);
    await this.page.locator(this.postalCodeField).fill(zip);
  }

  public async continueCheckout() {
    await this.page.locator(this.continueButton).click();
  }

  public async finishCheckout() {
    await this.page.locator(this.finishButton).click();
  }

  public async validateSuccessMessage(expected: string) {
    const actual = (await this.page.locator(this.successMessage).textContent())?.trim();
    if (actual !== expected) {
      throw new Error(`Expected success message "${expected}" but found "${actual}"`);
    }
  }
}
