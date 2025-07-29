import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class Product {
  private readonly page: Page;
  private readonly backpackAddToCartButton = '#add-to-cart-sauce-labs-backpack';
  private readonly cartIcon = '.shopping_cart_link';
  private readonly checkoutButton = '#checkout';
  private readonly firstNameInput = '#first-name';
  private readonly lastNameInput = '#last-name';
  private readonly postalCodeInput = '#postal-code';
  private readonly continueButton = '#continue';
  private readonly finishButton = '#finish';
  private readonly successMessage = '.complete-header';
  private readonly sortDropdown = '.product_sort_container';
  private readonly productPrices = '.inventory_item_price';

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.click(this.backpackAddToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, zip);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async verifyOrderSuccessMessage(expectedText: string) {
    const actualText = await this.page.textContent(this.successMessage);
    expect(actualText?.trim()).toBe(expectedText);
  }

  async sortByOption(optionText: string) {
    await this.page.selectOption(this.sortDropdown, {
      label: optionText
    });
  }

  async getAllProductPrices(): Promise<number[]> {
    const priceElements = await this.page.$$(this.productPrices);
    const prices: number[] = [];
    for (const el of priceElements) {
      const text = await el.textContent();
      if (text) {
        prices.push(parseFloat(text.replace('$', '').trim()));
      }
    }
    return prices;
  }
}