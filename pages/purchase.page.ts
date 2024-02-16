import { Page } from "@playwright/test"

export class Purchase{
    private readonly page: Page;
    private readonly checkoutButton: string = '//button[@id="checkout"]';
    private readonly firstName: string = '//input[@id="first-name"]';
    private readonly lastName: string = '//input[@id="last-name"]';
    private readonly postalCode: string = '//input[@id="postal-code"]';
    private readonly continueButton: string = '//input[@id="continue"]';
    private readonly finishButton: string = '//button[@id="finish"]';
    private readonly orderConfirmationMessage: string = '//div[@id="checkout_complete_container"]/h2';

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnCheckoutButton() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async enterUserDetails(firstName: string,lastName: string, postalcode: string) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.postalCode).fill(postalcode)
    }

    public async clickOnContinueButton() {
        await this.page.locator(this.continueButton).click()
    }

    public async clickOnFinishButton() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateOrderConfirmationMessage(expectedOrderConfirmationMessage: string){
        const actualOrderConfirmationMessage=await this.page.locator(this.orderConfirmationMessage).textContent()
        if (actualOrderConfirmationMessage !== expectedOrderConfirmationMessage) {
            throw new Error(`Expected order confirmation message to be ${expectedOrderConfirmationMessage} but found ${actualOrderConfirmationMessage}`);
          }
    }
}
