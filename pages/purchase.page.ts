import { expect, Page } from "@playwright/test"

export class Purchase {
private readonly page: Page
private readonly checkout = 'button[id="checkout"]'
private readonly firstName = 'input[id="first-name"]'
private readonly lastName = 'input[id="last-name"]'
private readonly zipCode = 'input[id="postal-code"]'
private readonly continueBtn = 'input[id="continue"]'
private readonly finishBtn = 'button[id="finish"]'
private readonly firstNameTxt: string = 'abc'
private readonly lastNameTxt: string = 'xyz'
private readonly zipCodeNum: string = '27140'

constructor(page: Page) {
    this.page = page;
}

public async checkoutButton() {
    await this.page.locator(this.checkout).click()
}

public async checkoutInfo() {
    await this.page.locator(this.firstName).fill(this.firstNameTxt)
    await this.page.locator(this.lastName).fill(this.lastNameTxt)
    await this.page.locator(this.zipCode).fill(this.zipCodeNum)
}

public async continueButton() {
    await this.page.locator(this.continueBtn).click()
}

public async finishButton() {
    await this.page.locator(this.finishBtn).click()
}

public async successMessage() {
    const successMsg = await this.page.textContent('.complete-header');
    expect(successMsg).toBe('Thank you for your order!');
}

}