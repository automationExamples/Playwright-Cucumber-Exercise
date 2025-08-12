import { Page } from "@playwright/test"
import {Decimal} from "decimal.js"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly sortBy: string = 'select[data-test="product-sort-container"]'
    private readonly productPrice: string = 'div[data-test="inventory-item-price"]'
    private readonly productName: string = 'div[data-test="inventory-item-name"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async sortProductsBy(sort: string) {
        console.log("Sorting products by " + await this.page.locator(this.sortBy).locator(`option[value="${sort}"]`).innerText());
        await this.page.locator(this.sortBy).selectOption(sort);
    }

    private convertToDecimal (val: string) {
        const parseCurrency = new RegExp('[^0-9.]');
        const replaceCurrency = '';
        return new Decimal (val.replace(parseCurrency, replaceCurrency));
    }

    public async validateSort(sort: string) {
        var attribute;
        switch (sort) {
            case "az":
            case "za":
                attribute = this.productName
                break;
            default:
                attribute = this.productPrice;
                break;
        }

        //get all inner texts of locator description.
        let orderList = await this.page.locator(attribute).allInnerTexts();

        if (orderList.length == 0) {
            throw new Error ("No items returned in list; please verify that at least one item is available for comparison");
        }

        //assumes that there is at least one item available for comparison.
        //lists with only one item are always in order.
        let isSorted = true;
        let prev = orderList[0];
        let curr = prev;

        //perform comparison for lists with more than one item.
        for (let index = 1; index < orderList.length; index++) {
            //convert next list item to Decimal format.
            curr = orderList[index];

            //determine list sort criteria.
            switch (sort.toLowerCase()) {
                case "az":
                    isSorted = (prev.localeCompare(curr) <= 0);
                    break;
                case "za":
                    isSorted = (prev.localeCompare(curr) >= 0);
                    break;
                case "lohi":
                    isSorted = (this.convertToDecimal(prev).lessThanOrEqualTo(this.convertToDecimal(curr)));
                    break;
                default: //hilo
                    isSorted = (this.convertToDecimal(prev).greaterThanOrEqualTo(this.convertToDecimal(curr)));
                    break;
            }

            //if one item in the list is out of order, the whole list is out of order.
            if (!isSorted) {
                isSorted = false;
                break;
            }

            //re-assign the current value to previous for next iteration.
            prev = curr;
        }

        //throw error if list was found not to be sorted.
        if (!isSorted) {
            throw new Error (`${prev} came before ${curr}, which is not sorted in ${sort}`);
        }
    }
}