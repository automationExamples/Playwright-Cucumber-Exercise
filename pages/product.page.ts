import { Page, expect } from "@playwright/test"
import { Common } from "./common.page"
import { assert } from "console"

export class Product {
    private readonly page: Page
    private readonly common: Common
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartButton: string = '//div[@id="shopping_cart_container"]'
    private readonly sortOptionByDataTest: string = "product_sort_container"
    private readonly inventoryItemPriceClass: string = "//div[@class='inventory_item_price']";

    constructor(page: Page) {
        this.page = page;
        this.common = new Common(this.page);
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickOnCartButton(){
        await this.page.locator(this.cartButton).click()
    }

    public async selectSortOption(optionName: string){
        await this.common.selectOptionByDataTest(this.sortOptionByDataTest,optionName);
    }

    public async getListOfProductsByPriceSort(name: string){
        const prices=["$7.99","$9.99","$15.99","$15.99","$29.99","$49.99"];
        var i=0;
        var j=prices.length-1;
       for(const price of await this.page.locator(this.inventoryItemPriceClass).all()){
        if(name == "Price (low to high)"){
            expect(prices.at(i),(await price.allTextContents()).toString());
            i++;
        }
        else{ 
            expect(prices.at(j),(await price.allTextContents()).toString());
            j--;

        }
       }
    }
}
