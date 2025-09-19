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
    private readonly continueButton = '//*[@id="continue"]'
    private readonly btnFinish = '[data-test="finish"]'

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
        this.clickContinueButton()
    }

    public async clickCheckouButton() {
        const btn = this.page.locator(this.btnCheckout)
        await btn.click()
    }

    public async fillPurchaseDetails() {
        const firstName = this.page.locator(this.txtBoxFName)
        const lastName = this.page.locator(this.txtBoxLName)
        const zipcode = this.page.locator(this.txtBoxZipCode)

        await firstName.fill('priyanka')
        await lastName.fill('chowderpally')
        await zipcode.fill('56466')
    }

    public async clickContinueButton() {
        const btn = this.page.locator(this.continueButton)
        await btn.click()
        await btn.click()
    }
    
      public  async clickFinishButton() {
        const btn = this.page.locator(this.btnFinish)
        await btn.click()
    }

}