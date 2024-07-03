import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string = '//*[@id="login_button_container"]/div/form/div[3]/h3/text()'

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

    //Vijay penumatsha
    public async enterUsername(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
    }

    public async clickOnLoginButton() {
        await this.page.locator(this.loginButton).click()
    }

    public async validateErrorMessage(expectederrorMessage: string) {
        const errormessage = await this.page.locator(this.errorMessage).getText()
        if (errormessage !== expectederrorMessage) {
            throw new Error(`Expected Error Message to be ${expectederrorMessage} but found ${errormessage}`);
          }
    }

}