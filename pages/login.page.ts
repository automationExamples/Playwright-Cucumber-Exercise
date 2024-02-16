import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly loginErrorMessageField: string = '//div[@class="error-message-container error"]/h3'

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

    public async validateLoginErrorMessage(errorMessage: string){
        // Getting the error message from Error Message Field
        const displayedLoginErrorMessage = await this.page.locator(this.loginErrorMessageField).textContent();

        // Checking the error messages
        if (displayedLoginErrorMessage !== errorMessage) {
            throw new Error(`Expected login error message to be ${errorMessage} but found ${displayedLoginErrorMessage}`);
          }
    }
}
