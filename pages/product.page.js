"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    page;
    addToCart = 'button[id="add-to-cart-sauce-labs-backpack"]';
    constructor(page) {
        this.page = page;
    }
    async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }
}
exports.Product = Product;
