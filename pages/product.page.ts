import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly selectCart: string = '//a[@class="shopping_cart_link"]'
    private readonly clickCheckOut: string = 'button[id="checkout"]'
    private readonly pageVerify: string = '//span[text()="Checkout: Your Information"]'
    private readonly pagePrdVerify: string = '//span[text()="Products"]'
    private readonly clickFilter: string = '[data-test="product-sort-container"]'
    private readonly clickFilterLoHi: string = 'option[value="lohi"]'
    private readonly clickFilterHiLo: string = 'option[value="hilo"]'    
    private readonly itemsOnPg: string = '[data-test="inventory-item"]'
    private readonly itemNameOnPg: string = '[data-test="inventory-item-name"]'
    private readonly itemPrice: string = '[data-test="inventory-item-price"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
// Following added by Madhavi
    public async ClickTheCart() {
        await this.page.locator(this.selectCart).click()
    }

    public async ClickCheckoutButton() {
        await this.page.locator(this.clickCheckOut).click()
    }

    public async verifyChkoutPgDisplayed() {
         return this.page.locator(this.pageVerify).isVisible        
    }

     public async verifyProductPgDisplayed() {
         return this.page.locator(this.pagePrdVerify).isVisible        
    }

    public async sortOptionSelect(label:string) {
        if(label==='Hi_Lo'){    
           await this.page.selectOption('[data-test="product-sort-container"]', 'Price (high to low)');
        } else {
           await this.page.selectOption('[data-test="product-sort-container"]', 'Price (low to high)');
        }
       
    }


    
  public async verifySortedItemsAndPricing(): Promise<{ prdName: string; price: Number }[]> {
  const itemsSelector = this.itemsOnPg;
  const nameSelector = this.itemNameOnPg;
  const priceSelector = this.itemPrice;

  // For each Product on Page get Items and corresponding price for each product
  return await this.page.$$eval(
    itemsSelector,
    (
      items: Element[],
      selectors: { nameSel: string; priceSel: string }
    ): { prdName: string; price: Number }[] => {
      return items.map(item => {
        const prdName = item.querySelector(selectors.nameSel)?.textContent?.trim() || '';
        const priceText = item.querySelector(selectors.priceSel)?.textContent?.trim() || '$0';
        const price = parseFloat(priceText.replace('$', '')) || 0;
        return { prdName, price };
      });
    },
    { nameSel: nameSelector, priceSel: priceSelector } 
  );
}

    }
