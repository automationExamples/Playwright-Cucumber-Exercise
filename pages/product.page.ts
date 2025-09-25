import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortSelect: string = 'select[data-test="product_sort_container"]'
    private readonly priceLocator: string = '.inventory_item_price'
    private readonly inventoryContainer: string = '.inventory_list'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortBy(optionText: string) {
        // Wait for products to be visible
    await this.page.locator(this.inventoryContainer).waitFor({ state: 'visible' });
    const locator = this.page.locator(this.sortSelect);
    await locator.waitFor({ state: 'visible' });
        // Try to find the option's value dynamically by matching option innerText
        try {
            const optionLocators = locator.locator('option');
            const labels = await optionLocators.allInnerTexts();
            const values = await optionLocators.evaluateAll((els: HTMLOptionElement[]) => els.map(e => e.value));
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].trim() === optionText.trim()) {
                    const val = values[i];
                    await locator.selectOption({ value: val });
                    return;
                }
            }
            // fallback: try select by label directly
            await locator.selectOption({ label: optionText });
        } catch (err) {
            throw new Error(`Failed to select sort option "${optionText}": ${err}`);
        }
    }

    public async getAllPrices(): Promise<number[]> {
        const elements = await this.page.locator(this.priceLocator).allInnerTexts();
        // texts like '$49.99' - strip '$' and parse float
    return elements.map(t => parseFloat(t.replace(/[^0-9.]/g, '')));
    }
}