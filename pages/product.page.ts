import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    //here we just gained the locator for where the confirmation message will be displayed and let the test know that it is a string
    private readonly finishMessage: string = 'h2'
    //here we gained the locator for the sort drop down
    private readonly sortDropdown: string = '[data-test="product_sort_container"]'
    private readonly itemsRound1: string = '.inventory_item_name'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    //and here we will be making sure that the message is correctly written in the same way as we wrote it in the purchase.feature file
    public async validateFinishMessage(expectedFinishMessage: string) {
        //in this const we will be gaining the messages text from the site
        const finMessage = await this.page.locator(this.finishMessage).textContent();
        //and here we will be wanting to see if the text we got from the site matches up to the string we made in the purchase.feature file
        if (finMessage !== expectedFinishMessage) {
            //if it does not match we throw an error
            throw new Error(`Expected finish message "${expectedFinishMessage}" but found "${finMessage}"`);
        }
    }


//---------------------------------------------------------------------------------------------
//My addition to the tests

    public async addItemsToCart(count: number) {
        const addToCartButtons = this.page.locator('button:has-text("Add to cart")');
        for (let i = 0; i < count; i++) {
            await addToCartButtons.nth(i).click();
        }
    }

    public async verifyItemsRound1() {
        const cartItems = await this.page.locator('.cart_item').count();
        const expectedCount = 3;
        if (cartItems !== expectedCount) {
            throw new Error(`Expected ${expectedCount} items in the cart, but found ${cartItems}`);
        }
    }

    public async verifyItemsRound2() {
        const cartItems = await this.page.locator('.cart_item').count();
        const expectedCount = 2;
        if (cartItems !== expectedCount) {
            throw new Error(`Expected ${expectedCount} items in the cart, but found ${cartItems}`);
        }
    }
}