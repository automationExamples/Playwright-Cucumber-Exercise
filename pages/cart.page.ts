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
	private readonly allProductPrices: string = '[data-test="inventory-item-price"]'
	private readonly taxAmount: string = '[data-test="tax-label"]'
	private readonly grandTotal: string = '[data-test="total-label"]'


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

	public async calculateTotal() {
		const prices = await this.page.locator(this.allProductPrices).allTextContents();
		const parsed = prices.map(p => parseFloat(p.replace('$', '')));
		const total = parsed.reduce((acc, curr) => acc + curr, 0);
		const taxAmount = total * 0.08;
		const grandTotal = total + taxAmount;
		await expect(this.page.locator(this.taxAmount)).toHaveText(`Tax: $${taxAmount.toFixed(2)}`);
		await expect(this.page.locator(this.grandTotal)).toHaveText(`Total: $${grandTotal.toFixed(2)}`);
	}
}