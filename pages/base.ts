import { Page } from "@playwright/test"

export class Base{

    protected readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async click(locator: string){
        await this.page.locator(locator).click()
    }

    async fill(locator: string, value: string){
        await this.page.locator(locator).fill(value)
    }

    async validateMessage(locator: string, expected: string){
        const actual=await this.page.locator(locator).innerText();
        if(actual !==expected){
            throw new Error(`Expected message to be ${expected} but found ${actual}`);
        }

    }

    async validateTitle( expected: string){
        const actual=await this.page.title()
        if(actual !==expected){
            throw new Error(`Expected title to be ${expected} but found ${actual}`);
        }

    }

    async selectByLabel(locator: string, labelvalue: string){
        await this.page.locator(locator).selectOption({label: labelvalue})
    }  

}