import { Locator, Page, expect } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly miniCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.miniCart = page.locator('[data-test="shopping-cart-link"]');
  }

  public async addItemToCart(name: string) {
    await this.page
      .locator(`[data-test="add-to-cart-sauce-labs-${name}"]`)
      .click();
    await expect(
      this.page.locator('[data-test="shopping-cart-badge"]')
    ).toContainText("1");
  }

  public async clickOnMiniCart() {
    await this.miniCart.click();
    await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html");
  }

  public async btnClick(text: string, url: string) {
    await this.page.getByRole("button", { name: `${text}` }).click();
    await expect(this.page).toHaveURL(url);
  }

  public async sortItemsBy(sort: string) {
    await this.page
      .locator('[data-test="product-sort-container"]')
      .selectOption(sort);
  }

  public async sortedItemValidation(sort: string) {
    await this.page
      .locator('[data-test="product-sort-container"]')
      .selectOption(sort);

    let sortedPrices = await this.page
      .locator('[data-test="inventory-item-price"]')
      .allTextContents();
    const sortedPricesNumbers = sortedPrices.map((price) =>
      parseFloat(price.replace("$", ""))
    );
    const sortedPricesNumbersCopy = [...sortedPricesNumbers];
    if (sort === "hilo") {
      sortedPricesNumbersCopy.sort((a, b) => b + a);
    } else {
      sortedPricesNumbersCopy.sort((a, b) => b - a);
    }
    expect(sortedPricesNumbers).toEqual(sortedPricesNumbersCopy);
  }
}
