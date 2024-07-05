import { Page } from "@playwright/test"

export class CartPage {
    private readonly page: Page;
   private readonly checkoutButtonSelector: string = 'Checkout';
 

    constructor(page: Page) {
        this.page = page;
    }

    
    async checkout() {
        await this.page.getByText(this.checkoutButtonSelector).click();
    }
}