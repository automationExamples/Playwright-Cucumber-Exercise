import { Page } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly custFirstName: string = 'Pramod'
    private readonly custLastName: string = 'Kumar'
    private readonly custZip: string = '43235'

    private readonly chooseCart: string = 'a[data-test="shopping-cart-link"]'
    private readonly checkout: string = 'button[data-test="checkout"]'
    private readonly firstName: string = 'input[id="first-name"]'
    private readonly lastName: string = 'input[id="last-name"]'
    private readonly zipCode: string = 'input[id="postal-code"]'
    private readonly continue: string = 'input[data-test="continue"]'
    private readonly finish: string = 'button[data-test="finish"]'
    private readonly successMessage: string = '[data-test="complete-header"]'


    constructor(page: Page) {
        this.page = page;
    }

    async clickOnElement(element: string) {
        if (element == "Cart") {
            await this.page.locator(this.chooseCart).click()
        }
        if (element == "Checkout") {
            await this.page.locator(this.checkout).click()
        }
        if (element == "continue") {
            await this.page.locator(this.continue).click()
        }
        if (element == "finish") {
            await this.page.locator(this.finish).click()
        }
    }

    async fillCustomerInformation(){
        await this.page.locator(this.firstName).fill(this.custFirstName)
        await this.page.locator(this.lastName).fill(this.custLastName)
        await this.page.locator(this.zipCode).fill(this.custZip)
    }

    async ValidateMessage(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.successMessage).innerText()
        console.log("Verifying error message.")
        if (actualMessage != expectedMessage) {
            throw new Error(`Expected error is ${expectedMessage} but got ${actualMessage}`);
        }
        else {
            console.log(`Expected error: ${expectedMessage} matched with: ${actualMessage}`)
        }
    }


}