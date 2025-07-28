import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropdown: string = 'select[data-test="product-sort-container"]'
    private readonly inventoryItemPrice: string = '[data-test="inventory_item_price"]'
    private readonly cartLink: string = '[data-test="shopping-cart-link"]'
    private readonly checkoutButton: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continueButton: string = '[data-test="continue"]'
    private readonly finishButton: string = 'button[data-test="finish"]'
    private readonly completeHeader: string = '[data-test="complete-header"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async goToCheckout() {
        await this.page.locator(this.cartLink).click()
        await this.page.waitForLoadState('networkidle')
        await this.page.click(this.checkoutButton)
        await this.page.waitForLoadState('networkidle')
    }

    public async fillInCheckoutDetails(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill(this.firstNameField, firstName)
        await this.page.fill(this.lastNameField, lastName)
        await this.page.fill(this.postalCodeField, postalCode)
        await this.page.click(this.continueButton)
    }

    public async finishCheckout() {
        await this.page.click(this.finishButton)
    }

    public async validateText(expectedText: string) {
        const actualText = await this.page.textContent(this.completeHeader);
        if (actualText !== expectedText) {
            throw new Error(`Expected text to be "${expectedText}" but found "${actualText}"`);
        }
    }

    public async sortItemsBy(sortOption: string) {
        await this.page.locator(this.sortDropdown).selectOption(sortOption)
    }

    public async validateItemsSortedByPrice(sortOrder: string) {
        const prices = await this.page.locator(this.inventoryItemPrice).allTextContents();
        const sortedPrices = [...prices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
        
        if (sortOrder === 'Price (low to high)') {
            if (JSON.stringify(prices) !== JSON.stringify(sortedPrices)) {
                throw new Error(`Items are not sorted correctly by price in ${sortOrder} order`);
            }
        } else if (sortOrder === 'Price (high to low)') {
            if (JSON.stringify(prices.reverse()) !== JSON.stringify(sortedPrices)) {
                throw new Error(`Items are not sorted correctly by price in ${sortOrder} order`);
            }
        }
    }

    public async validateFirstItemPrice(expectedPrice: string) {
        const firstItemPrice = await this.page.locator(this.inventoryItemPrice).first().textContent();
        if (firstItemPrice !== expectedPrice) {
            throw new Error(`Expected first item price to be ${expectedPrice} but found ${firstItemPrice}`);
        }
    }

    public async validateLastItemPrice(expectedPrice: string) {
        const lastItemPrice = await this.page.locator(this.inventoryItemPrice).last().textContent();
        if (lastItemPrice !== expectedPrice) {
            throw new Error(`Expected last item price to be ${expectedPrice} but found ${lastItemPrice}`);
        }
    }
}