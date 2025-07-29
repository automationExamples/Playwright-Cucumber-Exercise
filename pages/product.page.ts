import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly dropDownList: string = '[data-test="product-sort-container"]'
    private readonly invPrice: string = '[data-test="inventory-item-price"]'
    

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async sortItems(sOption: string) {
        await this.page.locator(this.dropDownList).waitFor({ state: 'visible' });
        await this.page.locator(this.dropDownList).click();
        let optionValue: string;
        switch(sOption) {
            case "lowToHigh":
                optionValue = "lohi";
                break;
            case "highToLow":
                optionValue = "hilo";
                break;
            default:
                throw new Error(`Unknown sort option: ${sOption}`);
        }
        await this.page.locator(this.dropDownList).selectOption(optionValue);

        await this.page.waitForLoadState('networkidle');
    }
    public async verifySortItemsByPrice(priceOption: string) {
        await this.page.locator(this.invPrice).first().waitFor({ state: 'visible' });
        let priceArray: number[] = [];
        const pricesCount = await this.page.locator(this.invPrice).count();
        for (let i = 0; i < pricesCount; i++) {
            const itemPriceText = await this.page.locator(this.invPrice).nth(i).textContent();
            if (itemPriceText) {
                const priceValue = parseFloat(itemPriceText.replace('$', ''));
                priceArray.push(priceValue);
            }
        }
        switch(priceOption) {
            case "lowToHigh":
                for(let i = 0; i < priceArray.length - 1; i++) {
                    if(priceArray[i] > priceArray[i + 1]) {
                        console.log("Wrong Order");
                    }
                }
                console.log("Prices are in ascending order (low to high)");
                break;
            case "highToLow":
                for(let i = 0; i < priceArray.length - 1; i++) {
                    if(priceArray[i] < priceArray[i + 1]) {
                        console.log("Wrong Order");
                    }
                }
                console.log("Prices are in descending order (high to low)");
                break;
            default:
                throw new Error(`Unknown price option: ${priceOption}`);
        }
    }
}