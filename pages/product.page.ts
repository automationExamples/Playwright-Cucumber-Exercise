import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly chooseCart: string = 'shopping_cart_badge'
    private readonly sortElement: string = 'select[class="product_sort_container"]'
    private readonly priceElementSelector: string = '.inventory_item_price[data-test="inventory-item-price"]';


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.waitForSelector(this.addToCart);
        await this.page.locator(this.addToCart).click()
    }

    async navigateToCart() {
        await this.page.locator(this.chooseCart).click()
    }

    async selectOption(sortOption: string) {
        await this.page.locator(this.sortElement).selectOption(sortOption)
    }


    async verifySortOrder(sortOption: string) {
        const priceElements = await this.page.$$(this.priceElementSelector);
        console.log(priceElements)
        const prices: string[] = [];
        for (const element of priceElements) {
            const priceText = await element.innerText();
            prices.push(priceText);
        }
        console.log('Prices found on the page:', prices);
        // Pending TODO
        // if sortOption == "Price(Low to High)"
        // verify the order
        // if sortOption == "Price(Low to High)"
        // verify the order

    }
}