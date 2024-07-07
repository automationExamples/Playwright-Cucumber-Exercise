import { expect, Page } from "@playwright/test"

export class Checkoutyourinformation {
    private readonly page: Page
    private readonly firstName: string = '//input[@id="first-name"]'
    private readonly lastName: string = '//input[@id="last-name"]'
    private readonly postalCode: string = '//input[@id="postal-code"]'
    private readonly continue: string = '//input[@id="continue"]'


    constructor(page: Page) {
        this.page = page;
    }

    async enterInformationDetails(firstName: string, lastName: string, postalcode: string) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.postalCode).fill(postalcode)
    }

    public async clickOnContinue() {
        await this.page.locator(this.continue).click()
    }
    
}