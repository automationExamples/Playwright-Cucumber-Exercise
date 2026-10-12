import { Page, Locator, expect } from "@playwright/test"
 
export interface CustomerInfo {
    firstName: string
    lastName: string
    postalCode: string
}
 
export class Checkout {
    private readonly page: Page
 
    private readonly checkoutButton: Locator
 
    private readonly firstNameInput: Locator
    private readonly lastNameInput: Locator
    private readonly postalCodeInput: Locator
    private readonly continueButton: Locator
 
    private readonly itemPrices: Locator
    private readonly subtotalLabel: Locator
    private readonly taxLabel: Locator
    private readonly totalLabel: Locator
    private readonly finishButton: Locator
 
    private readonly confirmationHeader: Locator
 
    private readonly errorMessage: Locator
 
    constructor(page: Page) {
        this.page = page
 
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
 
        this.firstNameInput = page.getByPlaceholder('First Name')
        this.lastNameInput = page.getByPlaceholder('Last Name')
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code')
        this.continueButton = page.getByRole('button', { name: 'Continue' })
 
        this.itemPrices = page.locator('.cart_item .inventory_item_price')
        this.subtotalLabel = page.locator('.summary_subtotal_label')
        this.taxLabel = page.locator('.summary_tax_label')
        this.totalLabel = page.locator('.summary_total_label')
        this.finishButton = page.getByRole('button', { name: 'Finish' })
 
        this.confirmationHeader = page.locator('.complete-header')
 
        this.errorMessage = page.locator('[data-test="error"]')
    }
 
    public async startCheckout() {
        await this.checkoutButton.click()
        await expect(this.page).toHaveURL(/checkout-step-one\.html/)
    }
 
    public async enterCustomerInfo(customer: CustomerInfo) {
        await this.firstNameInput.fill(customer.firstName)
        await this.lastNameInput.fill(customer.lastName)
        await this.postalCodeInput.fill(customer.postalCode)
    }
 
    public async submitCustomerInfo() {
        await this.continueButton.click()
    }
 
    public async continueToOverview() {
        await this.submitCustomerInfo()
        await expect(this.page).toHaveURL(/checkout-step-two\.html/)
    }
 
    public async verifyOrderTotals() {
        const itemCents = (await this.itemPrices.allInnerTexts())
            .map(text => this.toCents(text))
            .reduce((sum, cents) => sum + cents, 0)
 
        const subtotalCents = this.toCents(await this.subtotalLabel.innerText())
        const taxCents = this.toCents(await this.taxLabel.innerText())
        const totalCents = this.toCents(await this.totalLabel.innerText())
 
        expect(subtotalCents, 'item prices should add up to the subtotal').toBe(itemCents)
        expect(totalCents, 'subtotal plus tax should equal the total').toBe(subtotalCents + taxCents)
    }
 
    public async finishOrder() {
        await this.finishButton.click()
        await expect(this.page).toHaveURL(/checkout-complete\.html/)
    }
 
    public async verifyConfirmation(expectedText: string) {
        await expect(this.confirmationHeader).toHaveText(expectedText)
    }
 
    public async verifyErrorMessage(expectedMessage: string) {
        await expect(this.errorMessage).toHaveText(expectedMessage)
        await expect(this.page).toHaveURL(/checkout-step-one\.html/)
    }
 
    private toCents(text: string): number {
        const match = text.match(/\$(\d+\.\d{2})/)
        if (!match) {
            throw new Error(`Could not find a dollar amount in "${text}"`)
        }
        return Math.round(parseFloat(match[1]) * 100)
    }
}