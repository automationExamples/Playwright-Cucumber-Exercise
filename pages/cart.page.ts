import { Page } from "playwright";
import { click } from "../webUtils";

export class Cart {
    private readonly page: Page
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly continueShoppingButton: string = 'button[id="continue-shopping"]'
    private readonly cartItem: string = 'div[class="cart_item"]'
    private readonly cartItemName: string = 'div[class="inventory_item_name"]'
    private readonly cartItemPrice: string = 'div[class="inventory_item_price"]'
    private readonly cartItemRemove: string = '//button[contains(text(), "Remove")]'

    constructor(page: Page) {
        this.page = page;
    }

    public async clickCheckoutButton() {
        await click(this.page, this.checkoutButton)
    }

    public async clickContinueShoppingButton() {
        await click(this.page, this.continueShoppingButton)
    }

    public async removeItemFromCart() {
        await click(this.page, this.cartItemRemove)
    }

    
    


}