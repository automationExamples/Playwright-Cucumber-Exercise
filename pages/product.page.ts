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
    if (sort === "az" || sort === "za") {
      let sortedItems = await this.page
        .locator('[data-test="inventory-item-name"]')
        .allTextContents();
      const sortedItemsCopy = [...sortedItems].sort((a, b) =>
        a.localeCompare(b)
      );
      if (sort === "za") {
        sortedItemsCopy.reverse();
      }
      expect(sortedItems).toEqual(sortedItemsCopy);
    }
    if (sort === "hilo" || sort === "lohi") {
      let sortedPrices = await this.page
        .locator('[data-test="inventory-item-price"]')
        .allTextContents();
      const sortedPricesNumbers = sortedPrices.map((price) =>
        parseFloat(price.replace("$", ""))
      );
      const sortedPricesNumbersCopy = [...sortedPricesNumbers].sort((a, b) =>
        sort === "hilo" ? b - a : a - b
      );
      expect(sortedPricesNumbers).toEqual(sortedPricesNumbersCopy);
    }
  }
}
