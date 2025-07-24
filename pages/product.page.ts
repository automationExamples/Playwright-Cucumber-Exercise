import { Page, expect } from "@playwright/test"


export class Product {
    private readonly page: Page;
    private readonly addToCartButton: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly shoppingCartIcon: string = 'a[class="shopping_cart_link"]';
    private readonly productSortDropdown: string = 'select.product_sort_container';
    private readonly productPriceElements: string = 'div[class="inventory_item_price"]';

    constructor(page: Page) {
        this.page = page;
    }

  
    public async addBackpackToCart() {
        try {
            // Assert add to cart button is visible before clicking
            await expect(this.page.locator(this.addToCartButton)).toBeVisible();
            await this.page.locator(this.addToCartButton).click();
        } catch (error) {
            throw new Error(`Failed to add backpack to cart: ${error}`);
        }
    }

   
    public async openShoppingCart() {
        try {
            // Assert shopping cart icon is visible before clicking
            await expect(this.page.locator(this.shoppingCartIcon)).toBeVisible();
            await this.page.locator(this.shoppingCartIcon).click();
        } catch (error) {
            throw new Error(`Failed to open shopping cart: ${error}`);
        }
    }

    
    public async sortByPrice(sortOption: string) {
        try {
            // Assert dropdown is visible before interacting
            await expect(this.page.locator(this.productSortDropdown)).toBeVisible();
            
            // Map our human-readable sort options to the actual dropdown values
            let dropdownValue: string;
            if (sortOption === 'Price (high to low)') {
                dropdownValue = 'hilo';  // High to low option value
            } else if (sortOption === 'Price (low to high)') {
                dropdownValue = 'lohi';  // Low to high option value
            } else {
                throw new Error(`Unknown sort option: ${sortOption}`);
            }
            
            // Select the option from the dropdown
            await this.page.locator(this.productSortDropdown).selectOption(dropdownValue);
        } catch (error) {
            throw new Error(`Failed to sort by price: ${error}`);
        }
    }

  
    public async validatePriceSorting(sortType: string) {
        try {
            // Assert price elements are visible
            await expect(this.page.locator(this.productPriceElements).first()).toBeVisible();
            
            // Get all price elements from the page
            const priceElements = await this.page.locator(this.productPriceElements).all();
            const prices: number[] = [];
            
            // Extract price values and convert to numbers
            for (const element of priceElements) {
                const priceText = await element.textContent();
                if (priceText) {
                    // Remove $ symbol and convert to number
                    const price = parseFloat(priceText.replace('$', ''));
                    prices.push(price);
                }
            }

            // Validate high to low sorting using assertions
            if (sortType === 'Price (high to low)') {
                for (let i = 0; i < prices.length - 1; i++) {
                    // Assert current price is greater than or equal to next price
                    await expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
                }
            } 
            // Validate low to high sorting using assertions
            else if (sortType === 'Price (low to high)') {
                for (let i = 0; i < prices.length - 1; i++) {
                    // Assert current price is less than or equal to next price
                    await expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
                }
            }
        } catch (error) {
            throw new Error(`Failed to validate price sorting: ${error}`);
        }
    }
}