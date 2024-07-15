import { expect, Page } from "@playwright/test"

const sortOptions = {
    'Price (high to low)': 'htol',
    'Price (low to high)': 'ltoh',
  };
  
  const sortOrders = {
    'htol': 'descending',
    'ltoh': 'ascending',
  };

export class Product {
    
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortBy: string = 'select[data-test="product-sort-container"]'
    private readonly inventoryPrice: string = 'div[data-test="inventory-item-price"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProduct(sort: string) {
        await this.page.locator(this.sortBy).selectOption(sort)
    }

    public async validateSort(sortOrder: string) {
        const allPrices = await this.page.locator(this.inventoryPrice).allTextContents()
        const prices = allPrices.map(price => parseFloat(price.trim().slice(1)))
        let isSorted = true;
        if (sortOrder === 'htol') {
            for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                isSorted = false;
                break;
            }
            }
        } else if (sortOrder === 'ltoh') { 
            for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[i - 1]) {
                isSorted = false;
                break;
            }
            }
        } else {
            console.warn(`Invalid sort order: ${sortOrder}`);
        }

        expect(isSorted).toBe(true);
            }
        }