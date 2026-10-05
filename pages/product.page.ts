import { expect, Page } from "@playwright/test"

type SortRule = { field: 'price' | 'name', direction: 'asc' | 'desc' }

// Maps each option label in the sort dropdown (top-right) to how the list should be ordered
const SORT_RULES: Record<string, SortRule> = {
    'Price (low to high)': { field: 'price', direction: 'asc' },
    'Price (high to low)': { field: 'price', direction: 'desc' },
    'Name (A to Z)': { field: 'name', direction: 'asc' },
    'Name (Z to A)': { field: 'name', direction: 'desc' },
}

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly pageHeader: string = 'span.title'
    private readonly sortDropdown: string = 'select[data-test="product-sort-container"]'
    private readonly itemPrices: string = 'div[data-test="inventory-item-price"]'
    private readonly itemNames: string = 'div[data-test="inventory-item-name"]'
    private readonly cartBadge: string = 'span[data-test="shopping-cart-badge"]'
    private readonly expectedItemCount: number = 6

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async validatePageHeader(expectedHeader: string) {
        await expect(this.page.locator(this.pageHeader)).toHaveText(expectedHeader)
    }

    public async sortBy(sortOption: string) {
        this.getSortRule(sortOption)
        await this.page.locator(this.sortDropdown).selectOption({ label: sortOption })
    }

    public async validateSortedBy(sortOption: string, expectedCount: number = this.expectedItemCount) {
        const rule = this.getSortRule(sortOption)
        await expect(this.page.locator(this.itemPrices)).toHaveCount(expectedCount)

        if (rule.field === 'price') {
            const prices = await this.getItemPrices()
            const expected = [...prices].sort((a, b) => rule.direction === 'asc' ? a - b : b - a)
            this.assertOrder(prices, expected, sortOption)
        } else {
            const names = await this.page.locator(this.itemNames).allTextContents()
            const expected = [...names].sort((a, b) => rule.direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a))
            this.assertOrder(names, expected, sortOption)
        }
    }

    public async validateCartBadgeCount(expectedCount: number) {
        await expect(this.page.locator(this.cartBadge)).toHaveText(String(expectedCount))
    }

    private async getItemPrices(): Promise<number[]> {
        const priceTexts = await this.page.locator(this.itemPrices).allTextContents()
        return priceTexts.map(text => {
            const price = parseFloat(text.replace('$', '').trim())
            if (Number.isNaN(price)) {
                throw new Error(`Could not read a price from "${text}"`)
            }
            return price
        })
    }

    private getSortRule(sortOption: string): SortRule {
        const rule = SORT_RULES[sortOption]
        if (!rule) {
            throw new Error(`Unsupported sort option "${sortOption}". Expected one of: ${Object.keys(SORT_RULES).join(', ')}`)
        }
        return rule
    }

    private assertOrder<T>(actual: T[], expected: T[], sortOption: string) {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
            throw new Error(`Items are not sorted by "${sortOption}".\nExpected: ${JSON.stringify(expected)}\nFound:    ${JSON.stringify(actual)}`)
        }
    }
}
