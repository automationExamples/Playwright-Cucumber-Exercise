import { expect, Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addBackpackToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
	private readonly addBikeLightToCart: string = 'button[id="add-to-cart-sauce-labs-bike-light"]'
	private readonly addBoltTShirtToCart: string = 'button[id="add-to-cart-sauce-labs-bolt-t-shirt"]'
	private readonly addFleeceJacketToCart: string = 'button[id="add-to-cart-sauce-labs-fleece-jacket"]'
	private readonly addOnesieToCart: string = 'button[id="add-to-cart-sauce-labs-onesie"]'
	private readonly addTestAllTheThingsToCart: string = 'button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]'
	private readonly cartIcon: string = '[data-test="shopping-cart-link"]'
	private readonly allProductPrices: string = '[data-test="inventory-item-price"]'
	private readonly sortDropdown: string = '[data-test="product-sort-container"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addBackpackToCart).click()
    }

	public async addAllItemsToCart() {
		await this.page.locator(this.addBackpackToCart).click();
		await this.page.locator(this.addBikeLightToCart).click();
		await this.page.locator(this.addBoltTShirtToCart).click();
		await this.page.locator(this.addFleeceJacketToCart).click();
		await this.page.locator(this.addOnesieToCart).click();
		await this.page.locator(this.addTestAllTheThingsToCart).click();
	}

	public async openCart() {
		await this.page.locator(this.cartIcon).click()
	}

	public async sortItems(sort: string) {
		await this.page.locator(this.sortDropdown).selectOption({ label: sort });
	}

	public async assertSortOrder(sort: string) {
		// Wait for sorting animation or DOM update
		await this.page.waitForTimeout(500); // Adjust if needed for stability
		const prices = await this.page.locator(this.allProductPrices).allTextContents();
		const parsed = prices.map(p => parseFloat(p.replace('$', '')));
		let expected;
		if (sort === 'Price (high to low)') {
			expected = [...parsed].sort((a, b) => b - a);
		} else if (sort === 'Price (low to high)') {
			expected = [...parsed].sort((a, b) => a - b);
		}
		if (JSON.stringify(parsed) !== JSON.stringify(expected)) {
			throw new Error(`Products are not sorted by ${sort}`);
		}
		await expect(expected).toBeTruthy();
	}



}