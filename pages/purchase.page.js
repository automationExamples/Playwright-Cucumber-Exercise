"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
class Purchase {
    page;
    addToCart = 'button[id="add-to-cart-sauce-labs-backpack"]';
    cartButton = ".shopping_cart_link";
    checkoutButton = "#checkout";
    firstNameField = "#first-name";
    lastNameField = "#last-name";
    postalCodeField = "#postal-code";
    continueButton = "#continue";
    finishButton = "#finish";
    successMessage = ".complete-header";
    constructor(page) {
        this.page = page;
    }
    async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }
    async openCart() {
        await this.page.locator(this.cartButton).click();
    }
    async checkout() {
        await this.page.locator(this.checkoutButton).click();
    }
    async fillUserInfo(first, last, zip) {
        await this.page.locator(this.firstNameField).fill(first);
        await this.page.locator(this.lastNameField).fill(last);
        await this.page.locator(this.postalCodeField).fill(zip);
    }
    async continueCheckout() {
        await this.page.locator(this.continueButton).click();
    }
    async finishCheckout() {
        await this.page.locator(this.finishButton).click();
    }
    async validateSuccessMessage(expected) {
        const actual = (await this.page.locator(this.successMessage).textContent())?.trim();
        if (actual !== expected) {
            throw new Error(`Expected success message "${expected}" but found "${actual}"`);
        }
    }
}
exports.Purchase = Purchase;
