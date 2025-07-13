import { Page } from "@playwright/test"

export class Yourcart {
    private readonly page: Page
    private readonly checkoutField: string = '//button[@id="checkout"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    

    public async clickCheckoutButton() {
        await this.page.locator(this.checkoutField).click()
    }
}