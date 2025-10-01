import { expect, Page } from "@playwright/test"
import exp from "constants"

export class Checkout {
    private readonly page: Page
    private readonly thankYouMessage: string = 'h2[data-test="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateThankYouMessage(expectedMessage: string) {
        const thankYouMessage = this.page.locator(this.thankYouMessage);
        await expect(thankYouMessage).toHaveText(expectedMessage);
    }
}