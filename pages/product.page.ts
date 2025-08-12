import { Page, expect} from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortDropDwn: string = '.product_sort_container'
    private readonly priceLists: string = '.inventory_item_price'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async selectSortType(sortType: string) {
        await this.page.locator(this.sortDropDwn).selectOption({value: sortType});
    }

    public async validateSortedElements(sortType: string) {
        const priceList = await this.page.locator(this.priceLists).allTextContents()
        const pricesInNumbers = priceList.map(str => parseFloat(str.replace('$','')))
        console.log(pricesInNumbers)

        if(sortType=='az') {
            expect(priceList).toHaveLength(6);
        } else 
        if(sortType=='za') {
            expect(priceList).toHaveLength(6);
        } else
        if(sortType=='lohi') {
            expect(priceList).toHaveLength(6);
            for (let i = 0; i < pricesInNumbers.length - 1; i++) {
                expect(pricesInNumbers[i] <= pricesInNumbers[i + 1]).toBeTruthy();
            }
        } else
        if(sortType=='hilo') {
            expect(priceList).toHaveLength(6);
            for (let i = 0; i < pricesInNumbers.length - 1; i++) {
                expect(pricesInNumbers[i] >= pricesInNumbers[i + 1]).toBeTruthy();
            }
        }
    }
}