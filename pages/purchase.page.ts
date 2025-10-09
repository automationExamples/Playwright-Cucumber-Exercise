import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class Purchase extends BasePage {

  private readonly addToCartBtn: string = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private readonly cartIcon: string = ".shopping_cart_link";
  private readonly checkoutBtn: string = '[data-test="checkout"]';
  private readonly firstNameField: string = '[data-test="firstName"]';
  private readonly lastNameField: string = '[data-test="lastName"]';
  private readonly postalCodeField: string = '[data-test="postalCode"]';
  private readonly continueBtn: string = '[data-test="continue"]';
  private readonly finishBtn: string = '[data-test="finish"]';
  private readonly successMessage: string = ".complete-header";

  constructor(page: Page) {
    super(page);
    this.page;
    }

  public async addBackpackToCart() {
    await this.page.locator(this.addToCartBtn).click();
    await this.page.locator(this.cartIcon).click();
  }

  public async checkoutWithInfo(first: string, last: string, zip: string) {
    await this.page.locator(this.checkoutBtn).click();
    await this.page.locator(this.firstNameField).fill(first);
    await this.page.locator(this.lastNameField).fill(last);
    await this.page.locator(this.postalCodeField).fill(zip);
    await this.page.locator(this.continueBtn).click();
  }

  public async selectFinish() {
    await this.page.locator(this.finishBtn).click();
  }

  public async validateConfirmationText(expected: string) {
    const actual = (await this.page.locator(this.successMessage).textContent())?.trim() ?? "";
    if (actual !== expected) {
      throw new Error(`Expected message "${expected}" but found "${actual}"`);
    }
    await expect(this.page.locator(this.successMessage)).toHaveText(expected);
  }
}