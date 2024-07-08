import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly addCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cart: string = '//span[@class="shopping_cart_badge"]'
    private readonly checkoutButton: string = 'button[id="checkout"]'
    private readonly firstName: string = 'input[id="first-name"]'
    private readonly lastName: string = 'input[id="last-name"]'
    private readonly postalCode: string = 'input[id="postal-code"]'
    private readonly continueButton: string = 'button[id="continue"]'
    private readonly finishButton: string = 'button[id="finish"]'
    private readonly confirmMessage : string = '//h2[@class="complete-header"]'

   
    constructor(page: Page) {
        this.page = page;
    }


    public async addToCart() {
        await this.page.locator(this.addCart).click();
    }

    public async selectCart() {
        await this.page.locator(this.cart).click();
    }


    public async selectCheckOut() {
        await this.page.locator(this.checkoutButton).click();
        }


    public async fillDetails() {
        await this.page.locator(this.firstName).fill("Rakesh");
        await this.page.locator(this.lastName).fill("sharma");
        await this.page.locator(this.postalCode).fill("23228");
        

    }

    public async finishCheckout() {
        await this.page.locator(this.continueButton).click();
        await this.page.locator(this.finishButton).click();
        }

    public async validateConfirmMessage() {
        await this.page.locator(this.confirmMessage).isVisible();

            }
    

}