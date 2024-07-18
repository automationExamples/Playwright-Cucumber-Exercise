import { Page } from "@playwright/test"
import { Base } from '../pages/base';

export class Product extends Base{
    //private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cart: string = '.shopping_cart_link'
    private readonly productSortContainer: string ='.product_sort_container'
    private readonly priceList: string='div[class="inventory_list"] div div div div[class="inventory_item_price"]'
    private readonly productNameList: string='div[class="inventory_list"] div div div a div[class="inventory_item_name "]'

    constructor(page: Page) {
        super(page)
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async gotoCart(){
        await this.click(this.cart)
    }

    public async selectSortOption(sortOption: string){
        await this.selectByLabel(this.productSortContainer, sortOption)
    }

    public async validateItemsSort(sortBy: string) : Promise<boolean>{
        try{
            if(sortBy.includes('Price')){
                const sortByOrder=sortBy.substring(7, sortBy.length-1)
                const itemPrices=await this.page.$$(this.priceList)
                return sortByOrder.includes('high to low') ? this.isSortedDescending(Object.values(itemPrices).map(Number)) : this.isSortedAscending(Object.values(itemPrices).map(Number));
            }
            else if(sortBy.includes('Name')){
                const itemNames=await this.page.$$(this.productNameList)
                return sortBy.includes('A to Z')? this.isSortedAscending(Object.values(itemNames).map(String)) : this.isSortedDescending(Object.values(itemNames).map(String));
            }else{
                throw new Error(`unspported sort order: ${sortBy}`)
            }        
        }
        catch(error){
            console.error('Error in verifying the Product sorting:', error)
            return false
        }
    }

    async isSortedAscending(arr : (number[] | string[])): Promise<boolean>{
        for(let i=0; i< arr.length-1; i++){
            if(arr[i]> arr[i+1]){
                return false
            }
        }
        return true
    }

    async isSortedDescending(arr : (number[] | string[])): Promise<boolean>{
        for(let i=0; i< arr.length-1; i++){
            if(arr[i]< arr[i+1]){
                return false
            }
        }
        return true
    }
}