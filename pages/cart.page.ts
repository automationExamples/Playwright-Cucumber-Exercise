import { Page } from "@playwright/test"

export class CartPage {
    private readonly page: Page;
   private readonly checkoutButtonSelector: string = '.checkout-button';

    constructor(page: Page) {
        this.page = page;
    }

    
    async checkout() {
        await this.page.click(this.checkoutButtonSelector);
    }
}