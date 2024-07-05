import { Page, ElementHandle } from "@playwright/test";
import { expect } from '@playwright/test';

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly filter: string = '//*[@id="header_container"]/div[2]/div/span/select';
    public price: string | null = null;
    private readonly priceLocator: string;
   // private readonly element: ElementHandle;

    constructor(page: Page) {
        this.page = page;
        this.priceLocator = ".inventory_item_price";
        //this.element = element;
    }

public async getPrice(): Promise<string>
{
    if(!this.price){
    const priceElement = await this.page.$(this.priceLocator);
    if(priceElement){
        this.price = await priceElement.textContent();
       
    }

}
    return this.price || "";
}

public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click()
}

    
    public async verifySorting(sortType: string) {
        const itemPrices = await this.page.$$eval('.inventory_item_price', elements =>
            elements.map(element => parseFloat(element.textContent?.replace('$', ' ').trim() || '0'))

        );

        let sortedItemPrices: number[] = [];

        if (sortType === 'Price (low to high)') {
            
            sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
        } else if (sortType === 'Price (high to low)') {
           
            sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
        }

    
        expect(itemPrices).toEqual(sortedItemPrices);

       
        

    }

}