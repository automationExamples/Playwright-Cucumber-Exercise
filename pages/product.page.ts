import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly shoppingCartIcon: string = '[data-test="shopping-cart-link"]'
    private readonly sortByDropdown: string = '[data-test="product-sort-container"]'
    private readonly inventoryPrices: string = '[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectSortByOption(sortOption: string) {
        await this.page.locator(this.sortByDropdown).selectOption(sortOption);
    }

    public async validateProductPagePriceSort(sortOption: string) {
        const inventoryPriceArray = new Array();
        const inventoryPrices = await this.page.locator(this.inventoryPrices);
        const inventoryCount = await inventoryPrices.count();
        

        for (let i = 0; i < inventoryCount; i++) {
            const itemPrice = (await inventoryPrices.nth(i).textContent())?.trim();
            inventoryPriceArray.push(itemPrice); 
        }

        if(sortOption == "Price (low to high)"){
            for (let i = 0; i < inventoryPriceArray.length -1; i++) {
                const current = parseFloat(inventoryPriceArray[i]);
                const next = parseFloat(inventoryPriceArray[i + 1]);
                if (current > next) {
                    throw new Error(`Price is not sorted by ascending order. Price sort result: ${inventoryPriceArray}`)
                }
            }
        } else if (sortOption == "Price (high to low)"){
            for (let i = 0; i < inventoryPriceArray.length -1; i++) {
                const current = parseFloat(inventoryPriceArray[i]);
                const next = parseFloat(inventoryPriceArray[i + 1]);
                if (current < next) {
                    throw new Error(`Price is not sorted by descending order. Price sort result: ${inventoryPriceArray}`)
                }
            }
        } else {
            throw new Error(`Sort criteria is not recognized`)
        }
        return true;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickShoppingCart() {
        await this.page.locator(this.shoppingCartIcon).click()
    }

}