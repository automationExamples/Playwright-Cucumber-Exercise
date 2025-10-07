import { expect, Page } from "@playwright/test"
import exp from "constants"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortByDropdown: string = 'select[data-test="product-sort-container"]'
    private readonly productPrices: string = 'div[data-test="inventory-item-price"]'
    private readonly productNames: string = 'div[data-test="inventory-item-name"]'
    private readonly cart: string = 'a[data-test="shopping-cart-link"]'
    private readonly cartBadge: string = 'span[data-test="shopping-cart-badge"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItemsBy(sortOption: string) {
        await this.page.locator(this.sortByDropdown).click();
        await this.page.selectOption(this.sortByDropdown, sortOption);
    }

    public async validateItemsSortedBy(sortOption: string) {
        if (sortOption.includes("Price")) {
            await this.page.locator(this.productPrices).first().waitFor();
            const productPricesValues: string[] = await this.page.locator(this.productPrices).allInnerTexts();
            const productPricesNumbers: number[] = productPricesValues.map(price => parseFloat(price.replace("$", "")));
            let sortedPrices: number[] = [];
            if (sortOption.includes("low to high")) {
                sortedPrices = [...productPricesNumbers].sort((a, b) => a - b);
            } else if (sortOption.includes("high to low")) {
                sortedPrices = [...productPricesNumbers].sort((a, b) => b - a);
            }
            expect(productPricesNumbers).toEqual(sortedPrices);

        } else if (sortOption.includes("Name")) {
            await this.page.locator(this.productNames).first().waitFor();
            const productNames: string[] = await this.page.locator(this.productNames).allInnerTexts();
            let sortedNames: string[] = [];
            if (sortOption.includes("A to Z")) {
                sortedNames = [...productNames].sort();
            } else if (sortOption.includes("Z to A")) {
                sortedNames = [...productNames].sort().reverse();
            }
            expect(productNames).toEqual(sortedNames);
        }
    }

    public async clickOnCart() {
        await this.page.locator(this.cart).click();
    }

    public async addItemsToCart(number: string) {
        const targetCount = parseInt(number);
        let count = 0;
        while (count < targetCount) {
            await this.page.getByRole('button', { name: 'Add to cart' }).first().click();
            count++;
        }
    }

    public async validateCartBadge(number: string) {
        const cartBadge = this.page.locator(this.cartBadge);
        await expect(cartBadge).toHaveText(number);
    }


}