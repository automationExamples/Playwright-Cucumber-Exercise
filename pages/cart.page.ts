import { expect, Page } from "@playwright/test";

export class Cart {
	private readonly page: Page
	private readonly checkoutButton: string = '[data-test="checkout"]'
	private readonly firstNameInput: string = '[data-test="firstName"]'
	private readonly lastNameInput: string = '[data-test="lastName"]'
	private readonly postalCodeInput: string = '[data-test="postalCode"]'
	private readonly continueButton: string = '[data-test="continue"]'
	private readonly finishButton: string = '[data-test="finish"]'
	private readonly successMessage: string = '[data-test="complete-header"]'

	constructor(page: Page) {
		this.page = page;
	}

	public async checkout() {
		await this.page.locator(this.checkoutButton).click()
	}

	public async enterCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
		await this.page.locator(this.firstNameInput).fill(firstName);
		await this.page.locator(this.lastNameInput).fill(lastName);
		await this.page.locator(this.postalCodeInput).fill(postalCode);
	}

	public async continue() {
		await this.page.locator(this.continueButton).click()
	}

	public async finish() {
		await this.page.locator(this.finishButton).click()
	}

	public async getSuccessText(expectedText: string) {
		await expect(this.page.locator(this.successMessage)).toHaveText(expectedText);
	}
}