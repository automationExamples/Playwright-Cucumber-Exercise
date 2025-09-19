import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'

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

public async validateErrorMessage() {
    const errorMessage = this.page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');
    await errorMessage.waitFor({ state: 'visible', timeout: 5000 });

    const actualText = (await errorMessage.textContent())?.trim();
    const expected = 'Epic sadface: Sorry, this user has been locked out.';

    if (actualText !== expected) {
        throw new Error(`Expected error message to be:\n"${expected}"\nBut found:\n"${actualText}"`);
    }
}
}