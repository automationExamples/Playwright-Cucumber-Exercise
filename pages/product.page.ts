import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly shoppingCart: string = '.shopping_cart_link'
    private readonly checkOutBtn: string = '#checkout'
    private readonly continueBtn: string = '#continue'
    private readonly finishBtn: string = '#finish'
    private readonly completeMsg: string = '.complete-header'
    private readonly firstName: string = '#first-name'
    private readonly lasttName: string = '#last-name'
    private readonly zipCode: string = '#postal-code'
    private readonly sortBtn: string = '.product_sort_container'
    private readonly price: string = '.inventory_item_price'
    private readonly menu: string = '#react-burger-menu-btn'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async gotoshoppingCart() {
        await this.page.locator(this.shoppingCart).click()
    }
    public async checkOut() {
        await this.page.locator(this.checkOutBtn).click()
    }
    public async checkOutInfo(fName: string, lName: string, zipCode: string) {
        await this.page.locator(this.firstName).fill(fName);
        await this.page.locator(this.lasttName).fill(lName);
        await this.page.locator(this.zipCode).fill('zipCode')
    }
    public async continue() {
        await this.page.locator(this.continueBtn).click()
    }
    public async finish() {
        await this.page.locator(this.finishBtn).click()
    }
    public async validateOrderCompleteMsg(message: string) {
        const orderCompleteMsg = await this.page.locator(this.completeMsg)
        await expect(orderCompleteMsg).toHaveText(message)
    }
    public async sortOptions(option: string) {
        await this.page.locator(this.sortBtn).click()
        await this.page.locator(this.sortBtn).selectOption({ label: option });
    }

    public async validateSorting(sortType: string) {
        if (sortType.includes('Price')) {
            const prices = await this.page.locator(this.price).allTextContents();
            const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));

            if (sortType === 'Price (low to high)') {
                const sorted = [...numericPrices].sort((a, b) => a - b);
                expect(numericPrices).toEqual(sorted);
            } else if (sortType === 'Price (high to low)') {
                const sorted = [...numericPrices].sort((a, b) => b - a);
                expect(numericPrices).toEqual(sorted);
            }
        } else if (sortType.includes('Name')) {
            // Get names
            const names = await this.page.locator('.inventory_item_name').allTextContents();

            if (sortType === 'Name (A to Z)') {
                const sorted = [...names].sort((a, b) => a.localeCompare(b));
                expect(names).toEqual(sorted);
            } else if (sortType === 'Name (Z to A)') {
                const sorted = [...names].sort((a, b) => b.localeCompare(a));
                expect(names).toEqual(sorted);
            }
        } else {
            throw new Error(`Unsupported sort type: ${sortType}`);
        }
    }
    public async menuSelect(menuOption: string) {
        await this.page.locator(this.menu).click()
        await this.page.locator('a', { hasText: menuOption }).click();
    }
   



}

