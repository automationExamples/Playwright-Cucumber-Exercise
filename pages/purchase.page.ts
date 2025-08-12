import { Page, expect } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cart: string = '.shopping_cart_link'
    private readonly checkout: string = 'Checkout'
    private readonly firstName: string = 'First Name'
    private readonly lastName: string = 'Last Name'
    private readonly zip: string = 'Zip/Postal Code'
    private readonly continue: string = '#continue'
    private readonly finish: string = '#finish'
    private readonly successMessage: string = 'div#checkout_complete_container'
    private readonly options: string = 'Open Menu'
    private readonly logout: string = 'Logout'

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnCart() {
        await this.page.locator(this.cart).click()
    }

    public async clickOnCheckout() {
        await this.page.getByRole('button', { name: this.checkout }).click()
    }

    public async fillInUserDetails(firstName: string, lastName: string, zipCode:string) {
        await this.page.getByPlaceholder(this.firstName).fill(firstName)
        await this.page.getByPlaceholder(this.lastName).fill(lastName)
        await this.page.getByPlaceholder(this.zip).fill(zipCode)        
    }

    public async clickOnContinue() {
        await this.page.locator(this.continue).click()
    }

    public async clickOnFinish() {
        await this.page.locator(this.finish).click()
    }

    public async validateSuccessMessage(expectedMessage: string) {
        const successMessage = await this.page.locator(this.successMessage).textContent();
        console.log(successMessage)
        expect(successMessage).toContain(expectedMessage);
    }

    public async clickOnOptions() {
        await this.page.getByRole('button', { name: this.options }).click()
    }

    public async clickOnLogout() {
        await this.page.getByText(this.logout).click();
    }
}