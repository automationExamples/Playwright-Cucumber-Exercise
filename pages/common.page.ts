import { Page } from "@playwright/test"

export class Common{
    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    public async selectOptionByName(selectName:string, optionName: string){
        await this.page.locator("#"+selectName).selectOption({label: optionName})
    }
    public async selectOptionByDataTest(dataTest:string, optionName: string){
        await this.page.getByTestId(dataTest).selectOption({label: optionName})
    }
}
