import { Page, expect } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string = '[data-test="error"]'

    constructor(page: Page) {
        this.page = page;
    }
// Validates the page title against the expected title.
    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
// Logs in as a user with the provided username and the default password.
    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }
//Added a method for message validation 
    public async validateErrorMessage(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.errorMessage).textContent();
        expect(actualMessage?.trim()).toBe(expectedMessage);
    }
}