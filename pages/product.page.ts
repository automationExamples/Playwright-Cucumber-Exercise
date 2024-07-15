import { Page, expect } from "@playwright/test";

export class Product {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async addItemToCart(name: string) {
    await this.page
      .locator(`[data-test="add-to-cart-sauce-labs-${name}"]`)
      .click();
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]')
    ).toContainText("1");
  }

  public async sortItemsBy(sort: string) {
    await this.page
      .locator('[data-test="product-sort-container"]')
      .selectOption(sort);
  }

  public async sortedItemValidation(sort: string) {
    let sortedPrices = await this.page
      .locator('[data-test="inventory-item-price"]')
      .allTextContents();
    const sortedPricesNumbers = sortedPrices.map((price) =>
      parseFloat(price.replace("$", ""))
    );
    const sortedPricesNumbersCopy = [...sortedPricesNumbers];
    if (sort === "hilo") {
      sortedPricesNumbersCopy.sort((a, b) => b - a);
    } else if (sort === "lohi") {
      sortedPricesNumbersCopy.sort((a, b) => a - b);
    }
    expect(sortedPricesNumbers).toEqual(sortedPricesNumbersCopy);
  }
}
