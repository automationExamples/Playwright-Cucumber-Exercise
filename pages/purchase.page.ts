import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    public readonly selectCart: string = 'icon[id="shopping_cart_container"]'
    public readonly selectCheckout: string = 'button[id="checkout"]'
    public readonly firstName: string = 'input[id="first-name"]'
    public readonly lastName: string = 'input[id="last-name"]'
    public readonly zipCode: string = 'input[id="postal-code"]'
    public readonly selectContinue: string = 'input[id="continue"]'
    public readonly selectFinish: string = 'button[id="finish"]'
    public readonly validateText: string = 'h2[class="complete-header"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async select_Cart() {
        await this.page.locator(this.selectCart).click()
    }

    public async select_Checkout() {
        await this.page.locator(this.selectCheckout).click()
    }

    public async first_Name() {
        await this.page.locator(this.firstName).inputValue()
    }

    public async last_Name() {
        await this.page.locator(this.lastName).inputValue()
    }

    public async zip_Code() {
        await this.page.locator(this.zipCode).inputValue()
    }

    public async fillInfo(firstName : string, lastName : string, zipCode : string) {
        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.zipCode).fill(zipCode)
    }


    public async select_Continue() {
        await this.page.locator(this.selectContinue).click()
    }

    public async select_Finish() {
        await this.page.locator(this.selectFinish).click()
    }

    public async validate_Text() {
        await this.page.locator(this.validateText).isVisible()
    }
 }