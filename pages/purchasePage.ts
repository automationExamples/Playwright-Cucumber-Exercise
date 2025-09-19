import { Page, expect } from "@playwright/test"

export class PurchasePage {
    private readonly page: Page
    private readonly addTocart = '[data-test="add-to-cart-sauce-labs-backpack"]'
    private readonly cartIcon = '[data-test="shopping-cart-link"]'
    private readonly btnCheckout = '[data-test="checkout"]'
    private readonly txtBoxFName = '[data-test="firstName"]'
    private readonly txtBoxLName = '[data-test="lastName"]'
    private readonly txtBoxZipCode = '[data-test="postalCode"]'
    private readonly btnContinue = '[data-test="continue"]'
    private readonly btnFinish = '[data-test="finish"]'
    private readonly msgContainer = '[data-test="complete-header"]'
    private readonly defaultTimeout: number = 5000

    constructor(page: Page) {
        this.page = page
    }

    async addProducttoCart(locatorString: string) {
        const locator = this.page.locator(`[data-test="add-to-cart-sauce-labs-${locatorString}"]`)
        await expect(locator).toBeVisible({ timeout: this.defaultTimeout })
        await locator.click()
    }

    async clickGoToCart() {
        const cart = this.page.locator(this.cartIcon)
        await expect(cart).toBeVisible({ timeout: this.defaultTimeout })
        await cart.click()
    }

    async clickCheckouButton() {
        const btn = this.page.locator(this.btnCheckout)
        await expect(btn).toBeVisible({ timeout: this.defaultTimeout })
        await btn.click()
    }

    async enterCustomerInfo(fName: string, lName: string, zipCode: string) {
        const f = this.page.locator(this.txtBoxFName)
        const l = this.page.locator(this.txtBoxLName)
        const z = this.page.locator(this.txtBoxZipCode)

        await expect(f).toBeVisible({ timeout: this.defaultTimeout })
        await f.fill(fName)

        await expect(l).toBeVisible({ timeout: this.defaultTimeout })
        await l.fill(lName)

        await expect(z).toBeVisible({ timeout: this.defaultTimeout })
        await z.fill(zipCode)
    }

    async clickContinueButton() {
        const btn = this.page.locator(this.btnContinue)
        await expect(btn).toBeVisible({ timeout: this.defaultTimeout })
        await btn.click()
        await this.page.waitForLoadState('networkidle')
    }

    async clickFinishButton() {
        const btn = this.page.locator(this.btnFinish)
        await expect(btn).toBeVisible({ timeout: this.defaultTimeout })
        await btn.click()
        await this.page.waitForLoadState('networkidle')
    }

    async getCheckoutCompleteMessage() {
        const msg = this.page.locator(this.msgContainer)
        await expect(msg).toBeVisible({ timeout: this.defaultTimeout })
        return await msg.textContent()
    }

    async validateSuccessMsg(expMsg: string) {
        const actMsg = await this.getCheckoutCompleteMessage()
        await expect(actMsg).toBe(expMsg)
        console.log('Purchase Completed')
    }
}