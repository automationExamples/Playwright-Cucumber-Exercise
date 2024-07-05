import { Page } from '@playwright/test';

export class Cart {
  private readonly page: Page;
  private readonly cartIconSelector: string = 'a.shopping_cart_link[data-test="shopping-cart-link"]';
  private readonly checkoutButtonSelector: string = 'button.btn.btn_action.btn_medium.checkout_button[data-test="checkout"]';

  constructor(page: Page) {
    this.page = page;
  }

  public async selectCart() {
    await this.page.locator(this.cartIconSelector).click();
  }

  public async selectCheckout() {
    await this.page.locator(this.checkoutButtonSelector).click();
  }

}
