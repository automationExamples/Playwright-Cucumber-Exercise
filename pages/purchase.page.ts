import { Page, expect } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly shoppingCart: string = "//a[@class='shopping_cart_link']"
    private readonly checkoutButton: string = "//button[@id='checkout']"
    private readonly firstName: string = "#first-name"
    private readonly lastName: string = "#last-name"
    private readonly PostalCode: string = "#postal-code"
    private readonly continueButton: string = "#continue"
    private readonly finishButton: string = "#finish"
    private readonly thankYouMessage: string = "//h2[@class='complete-header']"

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.shoppingCart).click()
    }
    public async clickCheckoutButton() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillFields(firstName:string, lastname:string, postalcode: string) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastname)
        await this.page.locator(this.PostalCode).fill(postalcode)
    }

    public async clickContinue() {
        await this.page.locator(this.continueButton).click()
    }

    public async clickFinish() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateThankYouMessage(expected : string){
        const message =await this.page.locator(this.thankYouMessage).innerText()
        expect(message).toBe(expected)
    }
}
