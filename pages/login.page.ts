import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly loginError: string = '[data-test="error"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
            throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }

    async ValidateErrorMessage(expectedErrorMessage: string) {
        const actualErrorMessage = await this.page.locator(this.loginError).innerText()
        console.log("Verifying error message.")
        if (actualErrorMessage != expectedErrorMessage) {
            throw new Error(`Expected error is ${expectedErrorMessage} but got ${actualErrorMessage}`);
        }
        else {
            console.log(`Expected error: ${expectedErrorMessage} matched with: ${actualErrorMessage}`)
        }
    }
}