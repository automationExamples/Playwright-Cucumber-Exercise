import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    //private readonly password: string = 'secret_sauces'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly addToCartButton: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartIcon: string = 'a[class="shopping_cart_link"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameField: string = 'input[id="first-name"]'
    private readonly lastNameField: string = 'input[id="last-name"]'
    private readonly postalCodeField: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly orderConfirmationMsg: string = 'h2[class="complete-header"]'
    //private readonly orderConfirmationMsg: string = "//h2[text()='THANK YOU FOR YOUR ORDER']"


    constructor(page: Page) {
        this.page = page;
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()

    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCartButton).click()
    }

    public async cartIconClick() {
        await this.page.locator(this.cartIcon).click()
    }

    public async checkoutButtonClick() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillInCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.postalCodeField).fill(postalCode)

    }
    public async continueButtonClick() {
        await this.page.locator(this.continueButton).click()
    }
    public async finishButtonClick() {
        await this.page.locator(this.finishButton).click()
    }

    public async validateOrderConfirmation(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.orderConfirmationMsg).textContent()
        if (actualMessage !== expectedMessage) {
            throw new Error(`Expected order confirmation message to be "${expectedMessage}" but found "${actualMessage}"`)
        } else {
            console.log(`Order confirmation message : ${actualMessage}`);
        }
    }


}