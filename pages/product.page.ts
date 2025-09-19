import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly oneSie: string = '//*[@id="item_2_title_link"]/div'
    private readonly addToCart: string = '//*[@id="add-to-cart"]'
    private readonly cartIcon = '[data-test="shopping-cart-link"]'
    private readonly btnCheckout = '[data-test="checkout"]'
    private readonly txtBoxFName = '[data-test="firstName"]'
    private readonly txtBoxLName = '[data-test="lastName"]'
    private readonly txtBoxZipCode = '[data-test="postalCode"]'
    private readonly btnContinue = '[data-test="continue"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.oneSie).click()
        await this.page.locator(this.addToCart).click()
    }

    public async clickPurchase() {
        const cart = this.page.locator(this.cartIcon)
        await cart.click()
        this.clickCheckouButton()
        this.fillPurchaseDetails()
        this.btnContinue
    }

    public async clickCheckouButton() {
        const btn = this.page.locator(this.btnCheckout)
        await btn.click()
    }

    public async fillPurchaseDetails(){
        this.page.locator(this.txtBoxFName).fill('Priyanka')
        this.page.locator(this.txtBoxLName).fill('chowderpally')
        this.page.locator(this.txtBoxZipCode).fill('65473')
    }

    public async clickContinueButton() {
        const btn = this.page.locator(this.btnContinue)
        await btn.click()
        await this.page.waitForLoadState('networkidle')
    }
}