import { Page } from "@playwright/test"
import { Base } from '../pages/base';

export class Login extends Base{
    //private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessageText: string= 'h3[data-test="error"]'

    constructor(page: Page) {
        super(page);
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }

    public async loginAsUser(userName: string) {
        await this.fill(this.userNameField,userName)
        await this.fill(this.passwordField,this.password)
        await this.click(this.loginButton)
    }

    public async verifyErrorMessage(expectedErrorMessage: string) {
        await this.validateMessage(this.errorMessageText, expectedErrorMessage)
    }
}