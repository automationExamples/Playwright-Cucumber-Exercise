import { Page,expect } from "@playwright/test"
import { Console } from "console"

export class PurchasePage{
    private readonly page: Page
    private readonly addTocart='[data-test="add-to-cart-sauce-labs-backpack"]'
    private readonly cartIcon='[data-test="shopping-cart-link"]'
    private readonly btnCheckout='[data-test="checkout"]'
    private readonly txtBoxFName='[data-test="firstName"]'
    private readonly txtBoxLName='[data-test="lastName"]'
    private readonly txtBoxZipCode='[data-test="postalCode"]'
    private readonly btnContinue='[data-test="continue"]'
    private readonly btnFinish='[data-test="finish"]'
    private readonly msgContainer='[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }
    async addProducttoCart(locatorString:string){
        await this.page.locator('[data-test="add-to-cart-sauce-labs-'+locatorString+'"]').click();
    }
    async clickGoToCart(){
        await this.page.locator(this.cartIcon).click();
    }
    async clickCheckouButton(){
        await this.page.locator(this.btnCheckout).click();
    }
    async enterCustomerInfo(fName:string,lName:string,zipCode:string){
        await this.page.locator(this.txtBoxFName).fill(fName);
        await this.page.locator(this.txtBoxLName).fill(lName);
        await this.page.locator(this.txtBoxZipCode).fill(zipCode);
    }
    async clickContinueButton(){
        await this.page.locator(this.btnContinue).click();
        await this.page.waitForLoadState("networkidle");
    }
    async clickFinishButton(){
        await this.page.locator(this.btnFinish).click();
        await this.page.waitForLoadState("networkidle");
    }
    async getCheckoutCompleteMessgae(){
        return await this.page.locator(this.msgContainer).textContent();
    }
    async validateSuccessMsg(expMsg:string){
        const actMsg=await this.getCheckoutCompleteMessgae();
        expect(expMsg).toEqual(actMsg);
        console.log('Purchase Completed');
    }
}
