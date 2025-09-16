import { Page } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly addToCart: string =
    'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly sortDropdown: string =
    'select[data-test="product-sort-container"]';
  private readonly productPrices: string = ".inventory_item_price";
  private readonly productItems: string = ".inventory_item";

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async sortItemsBy(sortOption: string) {
       const dropdown = this.page.locator(this.sortDropdown);
       const valueMap: Record<string, string> = {
         "Price (low to high)": "lohi",
         "Price (high to low)": "hilo",
       };
       await dropdown.selectOption(valueMap[sortOption]);
       await this.page
         .locator(this.productItems)
         .nth(5)
         .waitFor({ state: "visible", timeout: 5000 });
  }

  public async validateItemsSortedByPrice(order: string) {
    const prices = await this.page.locator(this.productPrices).allInnerTexts();
    const priceNumbers = prices.map((price) =>
      parseFloat(price.replace("$", ""))
    );
    const sortedPrices =
      order === "Price (low to high)"
        ? [...priceNumbers].sort((a, b) => a - b)
        : [...priceNumbers].sort((a, b) => b - a);

    if (JSON.stringify(priceNumbers) !== JSON.stringify(sortedPrices)) {
      throw new Error(
        `Prices are not sorted correctly. Expected: ${sortedPrices}, but got: ${priceNumbers}`
      );
    }
  }
}