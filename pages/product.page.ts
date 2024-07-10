import {expect, Page} from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly chooseCart: string = 'shopping_cart_badge'
    private readonly sortElement: string = 'select[class="product_sort_container"]'
    private readonly priceElementSelector: string = '.inventory_item_price[data-test="inventory-item-price"]';
    private readonly nameElementSelector: string = '.inventory_item_name[data-test="inventory-item-name"]';


    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.waitForSelector(this.addToCart);
        await this.page.locator(this.addToCart).click()
    }

    async navigateToCart() {
        await this.page.locator(this.chooseCart).click()
    }

    async selectOption(sortOption: string) {
        await this.page.locator(this.sortElement).selectOption(sortOption)
    }


    async retrieveItemPrices() {
        const priceElements = await this.page.$$(this.priceElementSelector);
        const prices = [];
        for (const element of priceElements) {
            const priceText = await element.innerText();
            prices.push(priceText);
        }
        let formattedPrices: number[];
        formattedPrices = prices.map(price => parseFloat(price.replace('$', '')));
        return formattedPrices
    }

    async retrieveItemNames() {
        const nameElements = await this.page.$$(this.nameElementSelector);
        const names: string[] = [];
        for (const element of nameElements) {
            const nameText = await element.innerText();
            names.push(nameText);
        }
        console.log(names)
        return names
    }

    async verifySortOrderByPrice(sortOption: string, itemPrices: number[]) {
        // console.log(itemPrices)
        console.log('sort option is' + sortOption)

        if (sortOption == "Price (low to high)") {
            const isPriceLowToHigh = itemPrices.every((value, index, array) => {
                return index === 0 || array[index - 1] <= value;
            });
            console.log('low to high')
            expect(isPriceLowToHigh).toBe(true)
        }

        if (sortOption == "Price (high to low)") {
            const isPriceHighToLow = itemPrices.every((value, index, array) => {
                return index === 0 || array[index - 1] >= value;
            });
            console.log('high to low')
            expect(isPriceHighToLow).toBe(true)
        }
    }

    async isSortedAToZ(names: string[]) {
        for (let i = 1; i < names.length; i++) {
            if (names[i - 1].localeCompare(names[i]) > 0) {
                console.log('items are sorted from A To Z')
                return false;
            }
        }
        return true;
    }

    async isSortedZToA(names: string[]) {
        for (let i = 1; i < names.length; i++) {
            if (names[i - 1].localeCompare(names[i]) < 0) {
                return false;
            }
        }
        return true;
    }

    async verifySortOrderByName(sortOption: string, itemNames: string[]) {
        console.log(sortOption)
        if (sortOption == "Name (A to Z)") {
            expect(await this.isSortedAToZ(itemNames)).toBe(true)
        }
        if (sortOption == "Name (Z to A)") {
            expect(await this.isSortedZToA(itemNames)).toBe(true)
        }
    }

}