import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    //private readonly password: string = 'secret_sauces'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly pwdErrMsg: string = 'div[class="error-message-container error"]'

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

    public async validatePwdErrorMsg(expectedPwdErrorMsg: string) {
        const actualErrMsg = await this.page.locator(this.pwdErrMsg).textContent();
        if (actualErrMsg?.trim() !== expectedPwdErrorMsg) {
            console.log(`Password validation failed. Found: ${actualErrMsg}`);
            throw new Error(`Expected error message to be "${expectedPwdErrorMsg}" but found "${actualErrMsg}"`);
        } else {
            console.log(`Password validation passed. Found: ${actualErrMsg}`);
        }
    }
}