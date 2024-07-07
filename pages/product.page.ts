import { Page,expect} from "@playwright/test"

export class Product {
    private readonly page: Page
    //private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'   --commented byVenkatesh Bellamkonda
    private readonly addBackPackToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly removeBackPackToCart: string = 'button[id="remove-sauce-labs-backpack"]'
    private readonly BackPackPrice: string = '//div[text()="Sauce Labs Backpack"]/parent::a/parent::div/parent::div//div[@class="inventory_item_price"]'
    private readonly shoppingCart: string = '//div[@id="shopping_cart_container"]'
    private readonly filter: string ='select.product_sort_container'
    
    


    constructor(page: Page) {
        this.page = page;
    }
/*
    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
*/



public async addProductToCart(productItem: string) {
    var price:string;
    if (await this.page.locator(`//div[text()="Sauce Labs ${productItem}"]/parent::a/parent::div/parent::div//button[text()="Remove"]`).isVisible())  {
        await this.page.locator(`//div[text()="Sauce Labs ${productItem}"]/parent::a/parent::div/parent::div//button[text()="Remove"]`).click();
    }
        await this.page.locator(`//div[text()="Sauce Labs ${productItem}"]/parent::a/parent::div/parent::div//button[text()="Add to cart"]`).click();

}
    public async clickOnshoppingCart() {
        await this.page.locator(this.shoppingCart).click()
    }

    public async applyFilter(sort: string) {
        await this.page.locator(this.filter).selectOption(sort)

    }

    public async verifySorting(sortType: string) {
        // Get item prices and names
        const itemPrices = await this.page.locator('.inventory_item_price').evaluateAll(elements =>
            elements.map(element => parseFloat(element.textContent?.replace('$', '').trim() || '0')));
        
        const itemNames = await this.page.locator('.inventory_item_name').evaluateAll(elements =>
            elements.map(element => element.textContent?.trim() || ''));
    
        let sortedItemPrices: number[] = [];
        let sortedItemNames: string[] = [];
        
        if (sortType === 'Price (low to high)') {
            // Create a sorted copy of the item prices array
            sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
            // Compare the original array with the sorted array
            expect(itemPrices).toEqual(sortedItemPrices);
        } else if (sortType === 'Price (high to low)') {
            // Create a sorted copy of the item prices array
            sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
            // Compare the original array with the sorted array
            expect(itemPrices).toEqual(sortedItemPrices);
        } else if (sortType === 'Name (A to Z)') {
            // Create a sorted copy of the item names array
            sortedItemNames = [...itemNames].sort((a, b) => a.localeCompare(b));
            // Compare the original array with the sorted array
            expect(itemNames).toEqual(sortedItemNames);
        } else if (sortType === 'Name (Z to A)') {
            // Create a sorted copy of the item names array
            sortedItemNames = [...itemNames].sort((a, b) => b.localeCompare(a));
            // Compare the original array with the sorted array
            expect(itemNames).toEqual(sortedItemNames);
        }
    }
    
    

}