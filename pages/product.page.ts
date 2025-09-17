import { Page } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly addToCart: string =
    'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly cart: string = 'a[class="shopping_cart_link"]';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async selectCart() {
    await this.page.locator(this.cart).click();
  }
}
