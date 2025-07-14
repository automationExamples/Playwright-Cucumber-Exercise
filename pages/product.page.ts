import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortOption: string = '//select[@class="product_sort_container"]'
    private readonly cartButtonLocator: string = '//div[@id="shopping_cart_container"]'


    constructor(page: Page) {
        this.page = page;
    }

     public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickCartButton() {
        await this.page.locator(this.cartButtonLocator).click()
    }

    public async selectSort(sortOption : string) {
        debugger;
        await this.page.locator(this.sortOption).selectOption({ label: sortOption })
    }

  public async verifySort(sortOption : string) {
    
  const priceLocators = await this.page.locator('.inventory_item_price').allTextContents();

  // Convert prices to float numbers
  const prices = priceLocators.map(priceText =>
    parseFloat(priceText.replace('$', '').trim())
  );

  const sortedPrices = [...prices].sort((a, b) => {
    if (sortOption.toLowerCase().includes('low to high')) {
      return a - b; 
    } else if (sortOption.toLowerCase().includes('high to low')) {
      return b - a;
    } else {
      throw new Error(`Unsupported sort option: ${sortOption}`);
    }
  });

  // Assertion
    await expect(prices).toEqual(sortedPrices);

    }

}