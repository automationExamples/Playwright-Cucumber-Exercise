import { Page } from "@playwright/test"
import { validateArraySorted } from "../playwrightUtilities";
import { BasePage } from "./base.page";

export class Product extends BasePage {
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
     private readonly sortDropdown = '[data-test="product-sort-container"]';
     private readonly itemPrices = '.inventory_item_price';

    constructor(page: Page) {
    super(page);
    this.page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

  public async sortItems(option: string) {
    await this.page.locator(this.sortDropdown).selectOption({ label: option });
  }

 public async validatePricesAreSorted(order: 'asc' | 'desc') {
  const pricesText = await this.page.locator(this.itemPrices).allTextContents();
  const numericPrices = pricesText.map(p => parseFloat(p.replace('$', '').trim()));
  validateArraySorted(numericPrices, order);
}
}