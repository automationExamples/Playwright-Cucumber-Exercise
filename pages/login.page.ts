import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    // string added for problem 2
    private readonly errorMessage: string = 'div[class="error-message-container error"] h3[data-test="error"]';

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

    // function added for problem 2
    public async validateErrorMessage(expectedErrorMessage: string) {
        const errorMessageText = await this.page.locator(this.errorMessage).innerText();
        if (errorMessageText !== expectedErrorMessage) {
            throw new Error(`Expected error message to be "${expectedErrorMessage}" but found "${errorMessageText}"`);
        }
    }
}