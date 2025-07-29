import { Page } from "@playwright/test";

export class Purchase {
  constructor(private page: Page) {}

  async openCart(): Promise<void> {
    await this.page.locator(".shopping_cart_link").click();
  }

  async checkout(): Promise<void> {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async fillUserDetails(first: string, last: string, zip: string): Promise<void> {
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
  }

  async continue(): Promise<void> {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finish(): Promise<void> {
    await this.page.locator('[data-test="finish"]').click();
  }

  async validateSuccessMessage(expected: string): Promise<void> {
    const actual = await this.page.locator(".complete-header").textContent();
    if (!actual?.includes(expected)) {
      throw new Error(`Expected message: '${expected}', got '${actual}'`);
    }
  }
}