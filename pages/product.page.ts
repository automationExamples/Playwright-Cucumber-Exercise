import { expect, Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cart = 'div[id="shopping_cart_container"]'
    private readonly checkout = 'button[id="checkout"]'
    private readonly firstName = 'input[id="first-name"]'
    private readonly lastName = 'input[id="last-name"]'
    private readonly zipCode = 'input[id="postal-code"]'
    private readonly continueBtn = 'input[id="continue"]'
    private readonly finishBtn = 'button[id="finish"]'
    private readonly firstNameTxt: string = 'abc'
    private readonly lastNameTxt: string = 'xyz'
    private readonly zipCodeNum: string = '27140'
    private readonly selectOptions = '.product_sort_container'
    private readonly menuButton: string = '//button[contains(@id,"menu-btn")]';
    private readonly logoutButton: string = '//a[@id="logout_sidebar_link"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async cartButton() {
        await this.page.locator(this.cart).click()
    }

    public async checkoutButton() {
        await this.page.locator(this.checkout).click()
    }

    public async checkoutInfo() {
        await this.page.locator(this.firstName).fill(this.firstNameTxt)
        await this.page.locator(this.lastName).fill(this.lastNameTxt)
        await this.page.locator(this.zipCode).fill(this.zipCodeNum)
    }

    public async continueButton() {
        await this.page.locator(this.continueBtn).click()
}

    public async finishButton() {
        await this.page.locator(this.finishBtn).click()
    }

    public async successMessage() {
        const successMsg = await this.page.textContent('.complete-header');
        expect(successMsg).toBe('Thank you for your order!');
    }

    async sortItems(sortOption: string) {
        await this.page.selectOption(this.selectOptions, { label: sortOption });
    }

    async getSortedPrices(): Promise<number[]> {
        const prices = await this.page.$$eval('.inventory_item_price', items =>
            items.map(item => {
                const text = item.textContent;
                return text ? parseFloat(text.replace('$', '')) : 0;
            })
        );
        return prices;
    }

    async validateSorting(sortOption: string) {
        const prices = await this.getSortedPrices();
        const sortedPrices = [...prices];

        if (sortOption === 'Price (low to high)') {
            sortedPrices.sort((a, b) => a - b);
        } else if (sortOption === 'Price (high to low)') {
            sortedPrices.sort((a, b) => b - a);
        }

        expect(prices).toEqual(sortedPrices);
    }

    
    public async clickOnLogout() {
        await this.page.locator(this.menuButton).click();
        await this.page.locator(this.logoutButton).click();
    }


    public async logOutAndLogBackIn(): Promise<void> {
        await this.page.click(this.menuButton); // Open menu
        await this.page.click(this.logoutButton); // Click logout
       // await this.page.click(this.loginButton); // Click login button after log
}
}