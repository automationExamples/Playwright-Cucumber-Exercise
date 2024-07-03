import { Page } from "@playwright/test"

export class Cart {
    private readonly page: Page
    private readonly checkoutButton: string = '//button[@id="checkout"]'
    private readonly firstName: string = '//input[@name="firstName"]'
    private readonly lastName: string = '//input[@name="lastName"]'
    private readonly zipCode: string = '//input[@name="postalCode"]'
    private readonly continueButton: string = '//input[@name="continue"]'
    private readonly finishButton: string = '//button[@id="finish"]'
    private readonly orderConfirmationMessage: string = '//div[@id="checkout_complete_container"]/h2'

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async enterBasicInfo(firstName : string,lastName : string, zipCode : string) {
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.zipCode).fill(zipCode);

    }

    public async clickOnContinue() {
        await this.page.locator(this.continueButton).click()
    }

    public async clickOnFinish() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateOrderConfirmationMessage(expectedMessage : string) {
        const actualMessage = await this.page.locator(this.orderConfirmationMessage).textContent()
        if (actualMessage !== expectedMessage) {
            throw new Error('Expected order confirmation message to be ${expectedMessage} but found ${actualMessage}');
        }
    }

}