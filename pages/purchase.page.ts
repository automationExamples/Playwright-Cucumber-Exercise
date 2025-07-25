import { expect, Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cart: string = "//a[@class='shopping_cart_link']"
    private readonly checkOut: string = '//button[@id="checkout"]'
    private readonly firstName: string = '//input[@id="first-name"]'
    private readonly LastName: string = '//input[@id="last-name"]'
    private readonly postalCode: string = '//input[@id="postal-code"]'
    private readonly continue: string = '//input[@id="continue"]'
    private readonly finish: string = '//button[@id="finish"]'
    private readonly thankYouMessage: string = '//h2[@class="complete-header"]'
    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectCart(){
        await this.page.locator(this.cart).click()
    }

    public async selectCheckout(){
        await this.page.locator(this.checkOut).click()
    }

    public async enterFirstName(firstName: string){
        await this.page.locator(this.firstName).fill(firstName)
    }

    public async enterLastName(lastName: string){
         await this.page.locator(this.LastName).fill(lastName)
    }

    public async enterZipCode(zipCode: string){
        await this.page.locator(this.postalCode).fill(zipCode)
    }

    public async selectContinue(){
        await this.page.locator(this.continue).click()
    }

    public async clickFinish(){
        await this.page.locator(this.finish).click()
    }

     public async verifyThankYou(thankYou: string){
       let message = await this.page.locator(this.thankYouMessage).textContent()
       await expect(message).toContain(thankYou)
       
      
    }


}