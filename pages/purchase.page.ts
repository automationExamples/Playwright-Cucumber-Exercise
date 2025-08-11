import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly cartIcon: string = 'div[id="shopping_cart_container"]'
    private readonly checkoutButton: string = 'button[id=checkout]'
    private readonly firstNameTextBox: string = 'input[id=first-name]'
    private readonly lastNameTextBox: string = 'input[id=last-name]'
    private readonly postalCodeTextBox: string = 'input[id=postal-code]'
    private readonly firstName: string = 'Jhon'
    private readonly lastName: string = 'Doe'
    private readonly postalCode: string = '28215'
    private readonly continueButton: string = 'input[id=continue]'
    private readonly finishButton: string = 'button[id=finish]'
    private readonly successMsg: string = 'h2[class=complete-header]'

    constructor(page: Page) {
        this.page = page;
    }

    public async clickOnCart() {
        await this.page.locator(this.cartIcon).click()
    }

    public async clickOnCheckoutButton() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillUserDetails() {
        await this.page.locator(this.firstNameTextBox).fill(this.firstName)
        await this.page.locator(this.lastNameTextBox).fill(this.lastName)
        await this.page.locator(this.postalCodeTextBox).fill(this.postalCode)
    }

    public async clickOnContinueButton() {
        await this.page.locator(this.continueButton).click()
    }

    public async clickOnfinishButton() {
        await this.page.locator(this.finishButton).click()
    }

    public async verifySuccessMessage(expectedSuccessMessage: string) {
        const actualSuccessMsg = await this.page.locator(this.successMsg).textContent()
        if (actualSuccessMsg !== expectedSuccessMessage) {
          throw new Error(`Expected success message to be ${expectedSuccessMessage} but found ${actualSuccessMsg}`)
        }
    }


}
