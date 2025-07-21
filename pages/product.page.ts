import { Page } from "@playwright/test"


export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortBy: string = 'select[data-test="product-sort-container"]'
    private readonly priceList: string = 'div[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
     public async sortItems(sort: string) {
        await this.page.locator(this.sortBy).selectOption(sort)
    }

    public async verifySortedOrder(sortOrder: string) {
    const productPrices = await this.page.locator(this.priceList).allTextContents();
    const parsedProductPrices = productPrices.map(price => parseFloat(price.trim().slice(1)));


    let isSorted: boolean = true; 

    switch (sortOrder) {
        case 'htol': // High to Low
            for (let i = 1; i < parsedProductPrices.length; i++) {
                if (parsedProductPrices[i] > parsedProductPrices[i - 1]) {
                    isSorted = false;
                    break; 
                }
            }
            break;
        case 'ltoh': // Low to High
            for (let i = 1; i < parsedProductPrices.length; i++) {
                if (parsedProductPrices[i] < parsedProductPrices[i - 1]) {
                    isSorted = false;
                    break;
                }
            }
            break;
        default:
            console.warn(`Invalid sort order: ${sortOrder}`);
          
            break; 
        }

   
    }


}