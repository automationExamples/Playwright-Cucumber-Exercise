import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
   
    private readonly cartIcon: string = 'a.shopping_cart_link'; // top-right cart
    private readonly checkoutButton: string = '#checkout';      
    private readonly firstNameField: string = '#first-name';
    private readonly lastNameField: string = '#last-name';
    private readonly postalCodeField: string = '#postal-code';
    private readonly continueButton: string = '#continue';
    private readonly finishButton: string = '#finish';
    private readonly successMessage: string = '.complete-header'; // "THANK YOU FOR YOUR ORDER"
    private readonly errorMessageContainer: string = '.error-message-container';// negative scenerio
    private readonly continueShoppingBtn: string = '//button[@id="continue-shopping"]';

    constructor(page: Page) {
        this.page = page;
    }

    // Add backpack to cart
    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }

    // Go to cart
    public async goToCart() {
        await this.page.locator(this.cartIcon).click();
    }

    // Click checkout
    public async checkout() {
        await this.page.locator(this.checkoutButton).click();
    }

    // Fill checkout details
    public async fillCheckoutDetails(firstName: string, lastName: string, zip: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(zip);
        await this.page.locator(this.continueButton).click();
    }
    // Finish purchase
    public async finishPurchase() {
        await this.page.locator(this.finishButton).click();
    }

    // Validate success message
    public async validateSuccessMessage(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.successMessage).textContent();
        if (actualMessage !== expectedMessage) {
            throw new Error(`Expected message "${expectedMessage}" but found "${actualMessage}"`);
        }
        console.log("Purchase Success Message:", actualMessage);
    }
 public async validateErrorMessage(expectedMessage: string) {
        const actualMessage = await this.page.locator(this.errorMessageContainer).textContent();
        if (actualMessage!== expectedMessage) {
            throw new Error(`Expected error "${expectedMessage}" but found "${actualMessage}"`);
        }
        console.log("Error message displayed correctly:", actualMessage);
    }
 public async clickContinueShopping() {
  
  await this.page.locator(this.continueShoppingBtn).click();
  
}

// Verify current URL
public async verifyCurrentUrl(expectedUrl: string) {
  const actualUrl = this.page.url(); // Get the current page URL
  if (actualUrl !== expectedUrl) {
    throw new Error(`Expected URL "${expectedUrl}", but got "${actualUrl}"`);
  }
  console.log(`Current URL is correct: ${actualUrl}`);
}
}
    


    
