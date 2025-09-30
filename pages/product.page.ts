import { expect, Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
	private readonly cartIcon: string = '[data-test="shopping-cart-link"]'
	private readonly sortDropdown: string = '[data-test="product-sort-container"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
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
		const prices = await this.page.locator('[data-test="inventory-item-price"]').allTextContents();
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