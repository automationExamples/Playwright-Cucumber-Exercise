import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartsBtn: string = 'a[class=shopping_cart_link]'
    private readonly itemsInCart: string = 'span[class=shopping_cart_badge]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickOnCart(){
        const itemsCnt = await this.page.locator(this.itemsInCart).innerText();
        if(itemsCnt == "1"){
            await this.page.locator(this.cartsBtn).click()
        }    
        else{
            throw new Error(`Expected products in cart to be 1 but found ${itemsCnt}`);
        }
    }
}