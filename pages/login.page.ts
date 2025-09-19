import { Page } from "@playwright/test"
import { testData } from "../data/test-data"

export class Login {
    private readonly page: Page
    private readonly password: string = testData.credentials.password
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly expectedErrorMessage: string = '[data-test="error"]'

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

    public async verifyErrorMessage(errorMessage: string ){
        // написати експект на 
        const errorElement = await this.page.waitForSelector(this.expectedErrorMessage);
        let actualErrorMessage = await errorElement.textContent()
        if (errorMessage !== actualErrorMessage?.trim()) {
            throw new Error(`Expected error message to be "${errorMessage}" but found "${actualErrorMessage}"`);
        }
    }
}