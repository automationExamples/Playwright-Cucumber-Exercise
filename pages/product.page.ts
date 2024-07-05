import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private static readonly sortSelector: string = 'select.product_sort_container[data-test="product-sort-container"]';
    private static readonly productNamesSelector: string = '.inventory_item_name';
    private readonly sortDropdownSelector = 'select.product_sort_container';
    private readonly itemSelector = '.inventory_item_price'; // Adjust based on your actual item selector

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async navigateToCart() {
        await this.page.click('a.shopping_cart_link[data-test="shopping-cart-link"]');
        // Optionally return a new page object for Cart page if needed
      }
     
      public async sortItemsBy(sortOption: string) {
        await this.page.selectOption(this.sortDropdownSelector, { label: sortOption });
        await this.page.waitForSelector(this.itemSelector); // Wait for items to re-render after sorting
      }
    
      public async areItemsSorted(sortOrder: string): Promise<boolean> {
        try {
          if (sortOrder.includes('Price')) {
            const prices = await this.getItemPrices();
            return sortOrder.includes('high') ? this.isSortedDescending(prices) : this.isSortedAscending(prices);
          } else if (sortOrder.includes('Name')) {
            const names = await this.getItemNames();
            return sortOrder.includes('A to Z') ? this.isSortedAscending(names) : this.isSortedDescending(names);
          } else {
            throw new Error(`Unsupported sort order: ${sortOrder}`);
          }
        } catch (error) {
          console.error('Error verifying sorting:', error);
          return false; // Return false in case of error
        }
      }
    
      public async getItemPrices(): Promise<number[]> {
        const prices = await this.page.$$eval('.inventory_item_price', elements => {
            return elements.map(element => {
                const textContent = element.textContent;
                if (textContent) {
                    return parseFloat(textContent.trim().replace('$', ''));
                }
                return NaN; // or handle the case where textContent is null
            });
        });

        return prices;
    }


    
      private isSortedAscending(arr: (number[] | string[])): boolean {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            return false;
          }
        }
        return true;
      }
    
      private isSortedDescending(arr: (number[] | string[])): boolean {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < arr[i + 1]) {
            return false;
          }
        }
        return true;
      }

      public async getAllItemPrices(): Promise<number[]> {
        const items = await this.page.$$eval(this.itemSelector, elements =>
            elements.map(item => parseFloat(item.textContent!.replace('$', '').trim()))
        );
        return items;
    }
    public async areItemsSortedByPriceHighToLow(): Promise<boolean> {
      const prices = await this.getItemPrices();

      for (let i = 0; i < prices.length - 1; i++) {
          if (prices[i] < prices[i + 1]) {
              return false;
          }
      }

      return true;
  }

  public async areItemsSortedByPriceLowToHigh(): Promise<boolean> {
      const prices = await this.getItemPrices();

      for (let i = 0; i < prices.length - 1; i++) {
          if (prices[i] > prices[i + 1]) {
              return false;
          }
      }

      return true;
  }

  public async areItemsSortedByNameAToZ(): Promise<boolean> {
      const names = await this.getItemNames();

      for (let i = 0; i < names.length - 1; i++) {
          if (names[i] > names[i + 1]) {
              return false;
          }
      }

      return true;
  }

  public async areItemsSortedByNameZToA(): Promise<boolean> {
      const names = await this.getItemNames();

      for (let i = 0; i < names.length - 1; i++) {
          if (names[i] < names[i + 1]) {
              return false;
          }
      }

      return true;
  }

  public async getItemNames(): Promise<string[]> {
    const names = await this.page.$$eval('.inventory_item_name', elements => {
        return elements.map(element => {
            const textContent = element.textContent;
            if (textContent) {
                return textContent.trim();
            }
            return ''; // or handle the case where textContent is null
        });
    });

    return names;
}

}