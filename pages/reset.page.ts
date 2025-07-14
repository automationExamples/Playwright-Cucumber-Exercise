import { Page } from "@playwright/test"

export class Reset {
   private readonly page: Page
   private readonly menuButton: string = '[id="react-burger-menu-btn"]'
   private readonly cart: string = '[data-test="shopping-cart-link"]'
   private readonly itemName: string = '[data-test="inventory-item-name"]'
   private readonly continueShopping: string = '[data-test="continue-shopping"]'
   private readonly resetAppState: string = '[data-test="reset-sidebar-link"]'
   private readonly cartItemNumber: string = '[data-test="shopping-cart-badge"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async getMenuButton() {
       return await this.page.locator(this.menuButton)
    }

    public async getCartItems() {
      await this.page.locator(this.cart).click()
      return await this.page.locator(this.itemName)
    }

    public async getContinueShoppingElement() {
      return  await this.page.locator(this.continueShopping)
    }

    public async getResetAppState() {
      return  await this.page.locator(this.resetAppState)
    }

   public async getCartCount() {
      return await this.page.locator(this.cartItemNumber)
   }

}