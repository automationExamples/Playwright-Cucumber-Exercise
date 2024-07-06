import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly addToCartCommon: string = 'button[id="add-to-cart-sauce-labs-'
    private readonly dropdownSortSelector= 'select.product_sort_container';
    private readonly pricesitemSelector = '.inventory_item_price'; 

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public  async constructproductxpath( productname : string){
        console.log( "inside construct")
      
        let itemstoken = productname.replaceAll(" ","-")
        let addToCartItem : string = await this.addToCartCommon + itemstoken.toLowerCase() + '"]'
        return addToCartItem
     
        }

    public async addItemToCart(itemname : string) {
        // this will add any item just pass the itemname in the feature file
        console.log( "inside inside")
      const finalxpath = await this.constructproductxpath(itemname);
      console.log( "finalvalue is " + finalxpath)
        await this.page.locator(finalxpath).click()
    }
    public async sortItemsBy(sortOption: string) {
        await this.page.selectOption(this.dropdownSortSelector, { label: sortOption });
        await this.page.waitForSelector(this.pricesitemSelector); // Wait for items to re-render after sorting
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

      public async isSortedDescendingorAscending(arr: (number[] | string[])): Promise<string> {
        let ascending = null;
        let nextArr = arr.slice(1);
        for(var i = 0; i < nextArr.length; i++) {
           if(nextArr[i] === arr[i]){
              continue;
           }else if(ascending === null) {
              ascending = nextArr[i] > arr[i];
           }else if (ascending !== nextArr[i] > arr[i]){
              return 'unsorted';
           };
        }
        if(ascending === null){
           return 'all items are equal';
        };
        return ascending ? 'ascending' : 'descending';
      }



      public async getAllItemPrices(): Promise<number[]> {
        const items = await this.page.$$eval(this.pricesitemSelector, elements =>
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
            return ''; 
        });
    });

    return names;
}

}