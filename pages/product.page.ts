import { Page, expect } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart(): Promise<void> {
    await this.page.locator(this.addToCart).click();
  }

public async sortByOption(option: string): Promise<void> {
  const dropdown = this.page.locator('select.product_sort_container');

  console.log('🧭 Current URL:', this.page.url());

  // Screenshot full page before proceeding
  await this.page.screenshot({ path: `full-page-before-sort-${option}.png`, fullPage: true });

  for (let i = 0; i < 5; i++) {
    if (await dropdown.isVisible()) {
      console.log(`✅ Dropdown is visible, selecting: ${option}`);
      await dropdown.selectOption({ label: option });
      return;
    }
    console.log(`⌛ Waiting for dropdown, attempt ${i + 1}`);
    await this.page.waitForTimeout(2000);
  }

  throw new Error('❌ Dropdown still not visible after retries');
}




  public async validateFirstProduct(expectedName: string): Promise<void> {
    const firstItem = this.page.locator('.inventory_item_name').first();
    const actualName = await firstItem.textContent();
    expect(actualName?.trim()).toBe(expectedName);
  }

  public async validateLastProduct(expectedName: string): Promise<void> {
    const allItems = this.page.locator('.inventory_item_name');
    const lastIndex = await allItems.count() - 1;
    const lastItem = allItems.nth(lastIndex);
    const actualName = await lastItem.textContent();
    expect(actualName?.trim()).toBe(expectedName);
  }

  public async validateCartCount(expectedCount: string): Promise<void> {
  const cartBadge = this.page.locator('.shopping_cart_badge');
  const actualCount = await cartBadge.textContent();
  expect(actualCount?.trim()).toBe(expectedCount);
}

}
