import { Page } from "@playwright/test"
export class purchase{


      private readonly page: Page
      private readonly firstName:string='input[id="first-name"]'
      private readonly lastName:string='input[id="last-name"]'
        private readonly zip:string='input[id="zip"]'
        private readonly checkout: string = 'input[id="checkout-button"]'


  
        constructor(page: Page) {
        this.page = page;
    }
    
    public async check(checkout:String) {
    
       
        await this.page.locator(this.firstName).fill(this.firstName)
        await this.page.locator(this.lastName).fill(this.lastName)
        await this.page.locator(this.zip).fill(this.zip)
        await this.page.locator(this.checkout).click
        

       
    }
       
}


 
