import { expect, Page } from "@playwright/test"

export class Yourcart {
    private readonly page: Page
    private readonly checkOut: string = 'Checkout';
    private readonly BackPack: string = 'Sauce Labs Backpack';

    constructor(page: Page) {
        this.page = page;
    }

    async checkout() {
        await this.page.getByText(this.checkOut).click();
    }
    
    public async verifyCartDetails(productItem: string) {

       expect(this.page.locator(`//div[@class="inventory_item_name"][text()="Sauce Labs ${productItem}"]`).isVisible());
    
       
    }
}