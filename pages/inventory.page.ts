import { Page,Locator,ElementHandle } from "@playwright/test"
import { Product } from "./product.page";

export class InventoryPage {
    private readonly page: Page;
   private readonly addToCartButtonSelector: string = '.add-to-cart-button';
   private readonly cartIconSelector: string = '//*[@id="shopping_cart_container"]/a/span';
   private readonly sortSelect: string;
   private readonly productContainers: Locator;
    products: Product[]= [];
   

    constructor(page: Page) {
        this.page = page;
        this.products=this.products;
        this.sortSelect = 'select.product_sort_container';
        this.productContainers = this.page.locator('.inventory_item_price');
    }

    public async sortProductsByPrice(sortOption: string, products: Product[]): Promise<void>{
        
        switch(sortOption){
            case 'Price (low to high)':
                this.products.sort((a: Product, b: Product) => {
                    const priceA = Number(a.price) ?? 0 ;
                    const priceB = Number(b.price) ?? 0 ;
                    return priceA - priceB;
                });
                break;
            case 'Price (high to low)':
                this.products.sort((a: Product, b: Product) => {
                    const priceA = Number(a.price) ?? 0;
                    const priceB = Number(b.price) ?? 0;
                    return priceB - priceA;
                });
                break;
            
            default:

            throw new Error(`Invalid sort option: ${sortOption}`);
        }
        await this.page.selectOption(this.sortSelect, sortOption);
        
    }

    public async getProducts(): Promise<Product[]>{
        const products: Product[]=[];
        const productElements = await this.page.$$('.inventory_item_price');
        for(const element of productElements){
            const product = new Product(this.page);
            await product.getPrice();
            products.push(product);
        }
        return products;
    }

    async addToCart (itemName: string){
        //await this.page.locator(this.addToCart).click();
        const addToCartButton = await this.page.waitForSelector(`${this.addToCartButtonSelector}[data-name="${itemName}"]`);
        //await addToCart.click();
    }

    
    async goToCart() {
        await this.page.locator(this.cartIconSelector).click();
    }


}