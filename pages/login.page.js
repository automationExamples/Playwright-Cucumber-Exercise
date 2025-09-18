"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    page;
    password = 'secret_sauce';
    passwordField = 'input[id="password"]';
    userNameField = 'input[id="user-name"]';
    loginButton = 'input[id="login-button"]';
    constructor(page) {
        this.page = page;
    }
    async validateTitle(expectedTitle) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
            throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    async loginAsUser(userName) {
        await this.page.locator(this.userNameField).fill(userName);
        await this.page.locator(this.passwordField).fill(this.password);
        await this.page.locator(this.loginButton).click();
    }
    async validateLoginError(expectedMessage) {
        const pageMessage = await this.page.locator('[data-test="error"]').textContent();
        if (pageMessage !== expectedMessage) {
            throw new Error(`Expected Message to be ${expectedMessage} but found ${pageMessage}`);
        }
    }
}
exports.Login = Login;
