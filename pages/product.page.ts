import { Page, ElementHandle } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    public price: string | null = null;
    private readonly priceLocator: string;
    private readonly element: ElementHandle;

    constructor(page: Page, element: ElementHandle) {
        this.page = page;
        this.priceLocator = ".inventory_item_price";
        this.element = element;
    }

public async getPrice(): Promise<string>
{
    if(!this.price){
    const priceElement = await this.element.$(this.priceLocator);
    if(priceElement){
        this.price = await priceElement.textContent();
       
    }

}
    return this.price || "";
}

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
}