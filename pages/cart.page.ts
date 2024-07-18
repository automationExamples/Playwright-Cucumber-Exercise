import { Page } from "@playwright/test"
import { Base } from './base';

export class Cart extends Base{
    private readonly checkoutButton: string ='#checkout'

    constructor(page: Page) {
        super(page)
    } 

    public async checkoutTheItem(){
        await this.click(this.checkoutButton)
    }
}