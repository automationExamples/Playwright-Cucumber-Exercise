import { expect, Page } from "@playwright/test"

export class Checkoutoverviewcomplete {
    private readonly page: Page
    private readonly Finish: string = 'Finish';

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyCheckOutOverview(productItem: string, productquantity: string, productprice: string) {
 
    expect(await this.page.locator(`//div[@class="inventory_item_name"][text()="Sauce Labs ${productItem}"]`).innerText()).toContain(productItem);
    expect(await this.page.locator(`//div[@class="inventory_item_name"][text()="Sauce Labs ${productItem}"]//parent::a//parent::div//parent::div//div[@class="cart_quantity"]`).innerText()).toEqual(productquantity);
    expect(await this.page.locator(`//div[@class="inventory_item_name"][text()="Sauce Labs ${productItem}"]//parent::a//parent::div//div[@class="inventory_item_price"]`).innerText()).toEqual(productprice);    
    }

    async finish() {
        await this.page.getByText(this.Finish).click();
    }

    async verifyOrderConfirmationMsg(orderconfirmationMsg: string) {
        expect(await this.page.getByRole('heading', { name: 'Thank you for your order!'}).innerText()).toEqual(orderconfirmationMsg);
    } 
}