import { expect, Page } from "@playwright/test";

/**
 * Product page object for interacting with product-related UI and actions.
 */
export class Product {
    /** Playwright page instance */
    readonly #page: Page;
    // Selectors
    static #selectors = {
        addBackpack: 'button[id="add-to-cart-sauce-labs-backpack"]',
        cart: 'div[id="shopping_cart_container"]',
        checkout: 'button[id="checkout"]',
        firstName: 'input[id="first-name"]',
        lastName: 'input[id="last-name"]',
        zipCode: 'input[id="postal-code"]',
        continue: 'input[id="continue"]',
        finish: 'button[id="finish"]',
        sortDropdown: '.product_sort_container',
        menuBtn: '//button[contains(@id,"menu-btn")]',
        logoutBtn: '//a[@id="logout_sidebar_link"]',
        completeHeader: '.complete-header',
        price: '.inventory_item_price',
    };
    // Test data
    static #user = {
        firstName: 'Sunil ',
        lastName: 'Jaithwalla',
        zip: '28262',
    };

    constructor(page: Page) {
        this.#page = page;
    }

    /** Add backpack to cart */
    async addBackpackToCart() {
        await this.#page.locator(Product.#selectors.addBackpack).click();
    }

    /** Open cart */
    async openCart() {
        await this.#page.locator(Product.#selectors.cart).click();
    }

    /** Proceed to checkout */
    async proceedToCheckout() {
        await this.#page.locator(Product.#selectors.checkout).click();
    }

    /** Fill checkout information */
    async fillCheckoutInformation() {
        await this.#page.locator(Product.#selectors.firstName).fill(Product.#user.firstName);
        await this.#page.locator(Product.#selectors.lastName).fill(Product.#user.lastName);
        await this.#page.locator(Product.#selectors.zipCode).fill(Product.#user.zip);
    }

    /** Continue checkout */
    async continueCheckout() {
        await this.#page.locator(Product.#selectors.continue).click();
    }

    /** Complete purchase */
    async completePurchase() {
        await this.#page.locator(Product.#selectors.finish).click();
    }

    /** Verify order success message */
    async verifyOrderSuccess() {
        const confirmation = await this.#page.textContent(Product.#selectors.completeHeader);
        expect(confirmation).toBe('Thank you for your order!');
    }

    /** Select sort option by label */
    async selectSortOption(option: string) {
        await this.#page.selectOption(Product.#selectors.sortDropdown, { label: option });
    }

    /** Fetch all displayed prices as numbers */
    async fetchDisplayedPrices(): Promise<number[]> {
        return this.#page.$$eval(Product.#selectors.price, items =>
            items.map(item => {
                const priceText = item.textContent;
                return priceText ? Number(priceText.replace('$', '')) : 0;
            })
        );
    }

    /**
     * Assert that prices are sorted according to the given option.
     * @param option Sorting option label
     */
    async assertPricesSorted(option: string) {
        const prices = await this.fetchDisplayedPrices();
        const expected = [...prices];
        switch (option) {
            case 'Price (low to high)':
                expected.sort((a, b) => a - b);
                break;
            case 'Price (high to low)':
                expected.sort((a, b) => b - a);
                break;
            default:
                throw new Error(`Unknown sort option: ${option}`);
        }
        expect(prices).toEqual(expected);
    }

    /** Logout from the application */
    async logout() {
        await this.#page.locator(Product.#selectors.menuBtn).click();
        await this.#page.locator(Product.#selectors.logoutBtn).click();
    }

    /** Logout and optionally login again */
    async logoutAndLoginAgain(): Promise<void> {
        await this.#page.click(Product.#selectors.menuBtn);
        await this.#page.click(Product.#selectors.logoutBtn);
    }
}