import { Page } from "@playwright/test"
import { expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartLink: string = '//a[@class="shopping_cart_link"]'
    private readonly checkoutBtn: string = '//button[@id="checkout"]'
    private readonly firstNameField: string = '//input[@id="first-name"]'
    private readonly lastNameField: string = '// input[@id="last-name"]'
    private readonly zipCodeField: string = '// input[@id="postal-code"]'
    private readonly continueBtn: string = '//input[@id="continue"]'
    private readonly finishBtn: string = '//button[@id="finish"]'
    private readonly txtMessage: string = '//*[@id="checkout_complete_container"]/h2' 
    private readonly sortDropdown: string = '//select[@class="product_sort_container"]' 
    private readonly inventoryPrice: string = '//*[@id="inventory_container"]/div/div/div[2]/div[2]/div' 
    
    
    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async navigateToCart() {
        await this.page.locator(this.cartLink).click()
    }

    public async clickOnCheckout() {
        await this.page.locator(this.checkoutBtn).click()
    }

    public async clickOnContinue() {
        await this.page.locator(this.continueBtn).click()
    }

    public async clickOnFinish() {
        await this.page.locator(this.finishBtn).click()
    }

    public async validateMessage(expectedMessage: string) {
            await expect(this.page.locator(this.txtMessage)).toHaveText(expectedMessage);
        }

    public async shippingDetails(firstName: string, lastName: string, zipcode: string) {
        await this.page.locator(this.firstNameField).fill(firstName)
        await this.page.locator(this.lastNameField).fill(lastName)
        await this.page.locator(this.zipCodeField).fill(zipcode)
    }

    public async sortByOrder(sortOrder: string) {
        await this.page.locator(this.sortDropdown).selectOption(sortOrder);
    }

    public async sortByPrice(inventoryPrice: string) {
        const prices =  await this.page.locator(this.inventoryPrice).allTextContents();
        const numericPrices = prices.map(p => parseFloat(p.replace('$','')));
        const sorted = [...numericPrices].sort((a,b) => inventoryPrice === "Price (low to high)" ? a - b : b - a);
        expect(numericPrices).toEqual(sorted);
    }

    public async firstProductPrice(firstPrice: string) {
         const first = await this.page.locator(this.inventoryPrice).first().textContent();
          expect(first?.trim()).toBe(firstPrice);
    }

    public async lastProductPrice(lastPrice: string) {
         const first = await this.page.locator(this.inventoryPrice).last().textContent();
          expect(first?.trim()).toBe(lastPrice);
    }
}