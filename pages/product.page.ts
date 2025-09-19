import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly dropDownList: string = '[data-test="product-sort-container"]'
    private readonly invPrice: string = '[data-test="inventory-item-price"]'
    private readonly defaultTimeout: number = 5000

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        const btn = this.page.locator(this.addToCart)
        await expect(btn).toBeVisible({ timeout: this.defaultTimeout })
        await btn.click()
    }

    public async sortItems(sOption: string) {
        const dropdown = this.page.locator(this.dropDownList)
        await expect(dropdown).toBeVisible({ timeout: this.defaultTimeout })

        let optionValue: string
        switch (sOption) {
            case "lowToHigh":
                optionValue = "lohi"
                break
            case "highToLow":
                optionValue = "hilo"
                break
            default:
                throw new Error(`Unknown sort option: ${sOption}`)
        }

        await dropdown.selectOption(optionValue)
        await this.page.waitForLoadState('networkidle')
    }

    public async verifySortItemsByPrice(priceOption: string) {
        const firstPrice = this.page.locator(this.invPrice).first()
        await expect(firstPrice).toBeVisible({ timeout: this.defaultTimeout })

        const priceArray: number[] = []
        const pricesCount = await this.page.locator(this.invPrice).count()
        for (let i = 0; i < pricesCount; i++) {
            const itemPriceText = await this.page.locator(this.invPrice).nth(i).textContent()
            if (itemPriceText) {
                const priceValue = parseFloat(itemPriceText.replace('$', ''))
                priceArray.push(priceValue)
            }
        }

        if (priceArray.length < 2) {
            console.log('Not enough items to verify sorting')
            return
        }

        switch (priceOption) {
            case "lowToHigh":
                for (let i = 0; i < priceArray.length - 1; i++) {
                    if (priceArray[i] > priceArray[i + 1]) {
                        throw new Error('Items are not sorted low to high')
                    }
                }
                console.log("Prices are in ascending order (low to high)")
                break
            case "highToLow":
                for (let i = 0; i < priceArray.length - 1; i++) {
                    if (priceArray[i] < priceArray[i + 1]) {
                        throw new Error('Items are not sorted high to low')
                    }
                }
                console.log("Prices are in descending order (high to low)")
                break
            default:
                throw new Error(`Unknown price option: ${priceOption}`)
        }
    }
}