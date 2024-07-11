import { Page,expect } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartButton: string = '#shopping_cart_container .shopping_cart_link'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameInput = 'input[id="first-name"]'
    private readonly lastNameInput = 'input[id="last-name"]'
    private readonly zipCodeInput = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToCart() {
        await this.page.locator(this.cartButton).click()
    }

    public async checkout(){
        await this.page.locator(this.checkoutButton).click()
    }

    public async enterFirstName(text: string) {
        await this.page.locator(this.firstNameInput).fill(text)
    }

    public async enterLastName(text: string) {
        await this.page.locator(this.lastNameInput).fill(text)

    }

    public async enterZipCode(text:string) {
        await this.page.locator(this.zipCodeInput).fill(text)

    }

    public async continue() {
        await this.page.locator(this.continueButton).click()
    }

    public async finish() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateText(expectedText: string) {
        await expect(this.page.getByText(expectedText)).toBeVisible();
    }

}