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
        await this.page.locator(this.sortOption).selectOption(sortOption)
    }

  public async verifySort(sortOption : string) {
    
  const priceLocators = await this.page.locator('').allTextContents();

  // Convert prices to float numbers
  const prices = priceLocators.map(priceText =>
    parseFloat(priceText.replace('$', '').trim())
  );

  // Clone for comparison
   const sortedPrices = [...prices].sort((a, b) => {
    return sortOption.includes('low to high') ? a - b : b - a;
  });

  // Assertion
    await expect(prices).toEqual(sortedPrices);

    }

}