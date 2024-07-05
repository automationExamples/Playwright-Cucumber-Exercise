import { Page,Locator,ElementHandle } from "@playwright/test"
import { Product } from "./product.page";

export class InventoryPage {
    private readonly page: Page;
   private readonly addToCartButtonSelector: string = '.add-to-cart-button';
   private readonly cartIconSelector: string = '.shopping-cart-icon';
   private readonly sortSelect: string;
   private readonly productContainers: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortSelect = 'select.product_sort_container';
        this.productContainers = this.page.locator('.inventory_item');
    }

    public async sortProductsByPrice(sortOption: string){
        await this.page.selectOption(this.sortSelect, sortOption);
    }

    public async getProducts(): Promise<Product[]>{
        const products: Product[]=[];
        const productElements = await this.page.$$('.inventory_item');
        for(const element of productElements){
            const product = new Product(this.page, element);
            await product.getPrice();
            products.push(product);
        }
        return products;
    }

    async addToCart (itemName: string){
        const addToCartButton = await this.page.waitForSelector(`${this.addToCartButtonSelector}[data-name="${itemName}"]`);
        await addToCartButton.click();
    }
    async goToCart() {
        const cartIcon = await this.page.waitForSelector(this.cartIconSelector);
        await cartIcon.click();
    }


}