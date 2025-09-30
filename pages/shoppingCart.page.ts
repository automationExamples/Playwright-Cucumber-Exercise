import { Page } from "@playwright/test"

export class ShoppingCart {
    private readonly page: Page
    private readonly shoppingCartLink: string = 'a[class="shopping_cart_link"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstNameInmput: string = 'input[id="first-name"]'
    private readonly lastNameInmput: string = 'input[id="last-name"]' 
    private readonly postalCodeInmput: string = 'input[id="postal-code"]' 
    private readonly continueButton: string = 'input[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly confirmationMessage: string = 'h2[class="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.shoppingCartLink).click()
    }

    public async clickCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameInmput).fill(firstName)
        await this.page.locator(this.lastNameInmput).fill(lastName)
        await this.page.locator(this.postalCodeInmput).fill(postalCode)
    }

    public async clickContinue(){
        await this.page.locator(this.continueButton).click()
    }

    public async clickFinish(){
        await this.page.locator(this.finishButton).click()
    }

    public async validateConfirmationMessage(message: string) {
        const pageConfirmationMessage = await this.page.locator(this.confirmationMessage).textContent()
        if(pageConfirmationMessage !== message)
            throw new Error(`Expected message to be ${message} but found ${pageConfirmationMessage}`);
    }


} 