import { Page } from "@playwright/test"

export class Overview {
    private readonly page: Page
    private readonly finishField: string = '//button[@id="finish"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    
    public async clickFinishButton() {
        await this.page.locator(this.finishField).click()
    }
}