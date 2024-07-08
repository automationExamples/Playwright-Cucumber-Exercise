import {Page} from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[class="product_sort_container"]'
    private readonly productPrice: string = 'div[class="inventory_item_price"]'

    constructor(page: Page) {
        this.page = page;
    }


    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortItemsBy(sortType: string) {
        await this.page.locator(this.sortDropdown).selectOption(sortType);
        await new Promise(resolve => setTimeout(resolve, 5000)); // wait for 5 seconds
    }

    public async validateItemsSortedCorrectlyByPrice(expectedOrder: 'high to low' | 'low to high') {
        // Retrieve all the prices from the page and store them in an array
        const prices = await this.page.$$eval(this.productPrice, elements => elements.map(element => parseFloat((element.textContent || '').replace('$', ''))));

        // Create a copy of the array and sort it in the expected order
        const sortedPrices = [...prices].sort((a, b) => expectedOrder === 'high to low' ? b - a : a - b);

        // Sort the original array in the same order
        prices.sort((a, b) => expectedOrder === 'high to low' ? b - a : a - b);

        // Compare the sorted original array with the sorted array
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] !== sortedPrices[i]) {
                throw new Error('Items are not sorted correctly by price');
            }
        }
    }

}


