import { Page } from "@playwright/test"

export class Carts {
    private readonly page: Page
    private readonly checkoutBtn: string = '[id="checkout"]'
    private readonly firstName: string = '[id=first-name]'
    private readonly lastName: string = '[id="last-name"]'
    private readonly zipcode: string = '[id="postal-code"]'
    private readonly continueBtn: string = '[id="continue"]'
    private readonly finishBtn: string = '[id="finish"]'
    private readonly completestatus: string = '[class="complete-header"]'
    private readonly firstnameData: string = "standarduser"
    private readonly lastnameData: string = "sauce"
    private readonly zipcodeData: string = "30028"


    constructor(page: Page) {
        this.page = page;
    }

    public async checkout() {
        await this.page.locator(this.checkoutBtn).click()
    }

    public async enterUserdetails(){
        await this.page.locator(this.firstName).fill(this.firstnameData)
        await this.page.locator(this.lastName).fill(this.lastnameData)
        await this.page.locator(this.zipcode).fill(this.zipcodeData)
    }

    public async clickonContinue(){
        await this.page.locator(this.continueBtn).click()
    }

    public async validateSuccessMsg(successMsg: string){
        const expectedMsg = await this.page.locator(this.completestatus).innerText();
        if(expectedMsg != successMsg){
            throw new Error(`Expected success message to be ${successMsg} but found ${expectedMsg}`);
        }

    }

    public async clickonFinish(){
        await this.page.locator(this.finishBtn).click()
    }
}