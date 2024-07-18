import { Page } from "@playwright/test"
import { Base } from './base';

export class Checkout extends Base{
    private readonly firstNameField: string ='#first-name'
    private readonly lastNameField: string ='#last-name'
    private readonly zipcodeField: string = '#postal-code'
    private readonly continueButton: string ='#continue'
    private readonly finishButton: string ='#finish'
    private readonly thankYouFiled: string='.complete-header'

    constructor(page: Page) {
        super(page)
    } 

    public async enterRequiredDetails(firstName: string, lastName: string, zipCode: string){
        await this.fill(this.firstNameField,firstName)
        await this.fill(this.lastNameField,lastName)
        await this.fill(this.zipcodeField,zipCode)
    } 

    public async clickContinue(){
        await this.click(this.continueButton)
    }

    public async clickFinish(){
        await this.click(this.finishButton)
    } 

    public async validateThankYouNote(expectedThankYouNote: string){
        await this.validateMessage(this.thankYouFiled, expectedThankYouNote)
    }

}