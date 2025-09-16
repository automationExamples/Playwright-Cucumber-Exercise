import { expect, Locator, Page } from "@playwright/test"
import { Product } from "../components/product";

export class ProductPage {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly itemAttribute: string;
    private readonly sortContainer: Locator;
    alphabeticalSort: Locator;
    reverseAlphabeticalSort: Locator;
    priceSortAsc: Locator;
    priceSortDesc: Locator;
    itemName: string;
    cart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemAttribute = '[data-test="inventory-item"]';
        this.sortContainer = this.page.locator('[data-test="product-sort-container"]');
        this.alphabeticalSort = this.page.locator('option[value="az"]');
        this.reverseAlphabeticalSort = this.page.locator('option[value="za"]');
        this.priceSortAsc = this.page.locator('option[value="lohi"]');
        this.priceSortDesc = this.page.locator('option[value="hilo"]');
        this.itemName = '[data-test="inventory-item-name"]';
        this.cart = this.page.locator('[data-test="shopping-cart-badge"]');
    }

    async sortProducts(by: "price" | "title", order: "asc" | "desc") {
        const sortMap = {
        title: { asc: "az", desc: "za" },
        price: { asc: "lohi", desc: "hilo" },
        };

        const value = sortMap[by]?.[order];
        if (!value) throw new Error(`Unsupported sort option: ${by} ${order}`);

        // Capture product titles before sort
        const before = await this.page.locator(this.itemAttribute).locator(this.itemName).allInnerTexts();

        // Change the select's value properly
        await this.sortContainer.selectOption(value);

        // Wait until product list order changes
        await expect(async () => {
        const after = await this.page.locator(this.itemAttribute).locator(this.itemName).allInnerTexts();
        expect(after).not.toEqual(before);
        }).toPass();
  }

    async verifySorted(by: "title" | "price", order: "asc" | "desc") {
        const products = await this.getAllProducts();

        // Extract values from Product components
        const values = by === "title"
        ? await Promise.all(products.map(p => p.getTitle()))
        : await Promise.all(products.map(p => p.getPrice()));

        // Create a sorted copy
        const sorted = [...values].sort((a, b) =>
        typeof a === "string"
            ? (a as string).localeCompare(b as string, undefined, { sensitivity: "base" })
            : (a as number) - (b as number)
        );

        if (order === "desc") sorted.reverse();

        // Assertion
        expect(values).toEqual(sorted);
    }

    public async clickCart() {
        await this.cart.click();
    }

    async getAllProducts(): Promise<Product[]> {
        const containers = this.page.locator(this.itemAttribute);
        const count = await containers.count();

        const products: Product[] = [];
        for (let i = 0; i < count; i++) {
        products.push(new Product(containers.nth(i)));
        }
        return products;
  }

    async addToCartByTitle(title: string){
        const productToAdd: Product = await this.getProductByTitle(title);
        productToAdd.addToCart();
    }

    async getProductByTitle(title: string): Promise<Product> {
        const container = this.page.locator(this.itemAttribute, { hasText: title });
        if (await container.count() === 0) {
            throw new Error(`Product with title "${title}" not found`);
        }
        return new Product(container.first()); // in case multiple matches
    }
}