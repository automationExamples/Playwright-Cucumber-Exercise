import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartButton: string = '//div[@id="shopping_cart_container"]'
    private readonly menuButton: string = '//button[contains(@id,"menu-btn")]'
    private readonly logoutButton: string = '//a[@id="logout_sidebar_link"]'
    private readonly productSortDropdown: string = 'select[data-test="product_sort_container"]';
    private readonly inventoryItemNameSelector: string = '.inventory_item_name';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickOnCartButton() {
        await this.page.locator(this.cartButton).click()
    }

    /**
   * Sorts the items on the product page by the given sort type.
   * @param sortType The type of sorting to apply (e.g., "Price (high to low)").
   */
    public async sortItemsBy(sortType: string): Promise<void> {
        await this.page.locator(this.productSortDropdown).selectOption({ label: sortType });
    }

    /**
     * Validates that the products are in the specified order.
     * @param expectedOrder An array of product names in the expected order.
     */
    public async validateProductOrder(expectedOrder: string[]): Promise<void> {
        for (let i = 0; i < expectedOrder.length; i++) {
            const productName = await this.page.locator(this.inventoryItemNameSelector).nth(i).textContent();
            if (productName !== null) {
                //console.log(`Product ${i}: ${productName.trim()}`); // Add this line for debugging
                expect(productName.trim()).toEqual(expectedOrder[i]);
            }
        }
    }

    public async clickOnLogout() {
        await this.page.locator(this.menuButton).click()
        await this.page.locator(this.logoutButton).click()
    }
}
