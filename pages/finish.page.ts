import { Page } from "@playwright/test"

export class FinishPage {
    private readonly page: Page;
    private readonly orderConfirmationTextSelector: string = '//*[@id="checkout_complete_container"]/h2';
    

    constructor(page: Page) {
        this.page = page;
    }

    async getOrderConfirmationText(): Promise<string>{
        const orderConfirmationElement = await this.page.waitForSelector(this.orderConfirmationTextSelector);
        const textContent= await orderConfirmationElement.textContent();
        return textContent as string;
    }
   
}