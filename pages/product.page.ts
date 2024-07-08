import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortByDropDOwn = "//select[@class='product_sort_container']"
    private readonly priceRanges = ".inventory_item_price"

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async selectOption(option: string){
        await this.page.locator(this.sortByDropDOwn).selectOption(option)
    }

    public async  verifyOrderLowToHigh(elemcount : number){
        let returnedFlag=true;
        let first = -1;
        let second=0;
        for(let i=1;i<elemcount;i++){
            if(first>second){
                returnedFlag=false;
                break;
            }
            else{
                first=second
                second=eval((await this.page.locator(this.priceRanges).nth(i).innerText()).replace("$",""))
            }
        }
        expect(returnedFlag).toBe(true)
    }

}

