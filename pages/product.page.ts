import { Page, expect } from "@playwright/test";


export class Product {
    private readonly page: Page;

    //product selectors
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';

    //sorting selectors
    private readonly sortSelect = '[data-test="product_sort_container"]';
    private readonly priceCells = '.inventory_item_price';
    private readonly sortSelectFallback = '#header_container select';


    //checkout flow 
    private readonly cartIcon = '.shopping_cart_link';
    private readonly checkoutBtn = '#checkout';
    private readonly firstName = '#first-name';
    private readonly lastName = '#last-name';
    private readonly postalCode = '#postal-code';
    private readonly continueBtn = '#continue';
    private readonly finishBtn = '#finish';
    private readonly completeHeader = '.complete-header';
    
    constructor(page: Page) {
        this.page = page;
    }

    //product actions
    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }

    //sorting actions
    public async selectSort(sortText: string) {
    // Ensure we are on the inventory page after login
        await this.page.waitForURL(/\/inventory\.html$/);

        const select = this.page.locator(`${this.sortSelect}, ${this.sortSelectFallback}`).first();
        await select.waitFor({ state: 'visible' });

    //selecting by label first
        try {
        await select.selectOption({ label: sortText });
        } catch {
    //fallback
        const normalized = sortText.trim().toLowerCase();
        const value =
          normalized.includes('low to high') ? 'lohi' :
          normalized.includes('high to low') ? 'hilo' :
          undefined;

        if (!value) {
          const available = await select.locator('option').allTextContents();
          throw new Error(
            `Cannot select sort option "${sortText}". ` +
            `Available options: ${available.map(s => `"${s.trim()}"`).join(', ')}`
          );
        }
        
        await select.selectOption({ value });
    }

    //wait for sort completing
    await this.page.waitForLoadState('networkidle');
    }


    private async getAllPrices(): Promise<number[]> {
        await this.page.locator(this.priceCells).first().waitFor({ state: 'visible', timeout: 10000 });
        
        const texts = await this.page.locator(this.priceCells).allTextContents();
        return texts.map(t => parseFloat(t.replace('$', '').trim()));
    }

    public async validatePricesSorted(order: 'asc' | 'desc') {
        const prices = await this.getAllPrices();
        if (prices.length !== 6) {
            throw new Error(`Expected 6 items, found ${prices.length}. Prices: [${prices.join(', ')}]`);
        }

        const expected = [...prices].sort((a, b) => a - b);
        if (order === 'desc') expected.reverse();

        expect(prices, `Prices not sorted ${order}. Actual: [${prices.join(', ')}]`)
            .toEqual(expected);
    }



    //purchase flow
    public async openCart() {
        await this.page.locator(this.cartIcon).click();
    }

    public async checkout() {
        await this.page.locator(this.checkoutBtn).click();
    }

    public async fillCheckoutInfo(first: string, last: string, zip: string) {
        await this.page.locator(this.firstName).fill(first);
        await this.page.locator(this.lastName).fill(last);
        await this.page.locator(this.postalCode).fill(zip);
    }

    public async continueCheckout() {
        await this.page.locator(this.continueBtn).click();
    }

    public async finishCheckout() {
        await this.page.locator(this.finishBtn).click();
    }

    public async validateConfirmationMessage(expected: string) {
        const actual =
          (await this.page.locator(this.completeHeader).textContent())?.trim() || "";
        expect(actual).toBe(expected.trim());
    }
}