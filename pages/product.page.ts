import { expect, Page } from "@playwright/test"
let sortTypePrice: string;
export class Product {
    private readonly page: Page
    private readonly sort: string = '//*[@id="header_container"]//span/select'
    private readonly price: string = '//div[@class="inventory_item_price"]'
    constructor(page: Page) {
        this.page = page;
    }
    public validateSort(price: number[], orderType: string) {
        if (orderType === 'lohi') {
            expect(price).toEqual(price.sort((a, b) => a - b));
        } else if (orderType === 'hilo') {
            expect(price).toEqual(price.sort((a, b) => b - a));
        } else {
            throw new Error('Invalid sort order type');
        }

    }
    public async selectSort(sortType: any) {
        sortTypePrice = sortType;
        await this.page.locator(this.sort).selectOption(sortType)
        await this.page.screenshot({ path: 'screenshot.png' });  
    }

    public async sortedPrice() {
        let priceCount = await this.page.locator(this.price).count()
        let productPrice: number[] = [];

        for(let i=0; i < priceCount; i++) {
            let price = await this.page.locator(this.price).nth(i).textContent();
            console.log(price);
            if (price) {
                price = price.replace('$', '');
                console.log(parseFloat(price));
                productPrice.push(parseFloat(price));
            } else {
                throw new Error('Price not found');
            }
        }
        this.validateSort(productPrice, sortTypePrice);
        await this.page.screenshot({ path: 'screenshot.png' });  
    }
}