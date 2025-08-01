import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly pageHeaderText: string = '[data-test="title"]'
    private readonly cartItemName: string = '(//*[@data-test="inventory-item-name"])[1]'
    private readonly cartItemQuantity: string = '(//div[@data-test="item-quantity"])[1]'
    private readonly checkOutButton: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continueButton: string = '[data-test="continue"]'
    private readonly finishButton: string = '[data-test="finish"]'
    private readonly orderMessage: string = '[data-test="complete-header"]'


    constructor(page: Page) {
        this.page = page;
    }

    public async validatePageHeaderText(expectedHeader: string) {
        let pageHeader = await this.page.locator(this.pageHeaderText).textContent()
        if (pageHeader !== expectedHeader) {
          throw new Error(`Expected title to be ${expectedHeader} but found ${pageHeader}`);
        }
    }

    public async clickCheckoutButton() {
        await this.page.locator(this.checkOutButton).click();
    }

    public async fillCheckoutYourInfoForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
    }

    public async selectContinueButtion() {
        await this.page.locator(this.continueButton).click()
    }

    public async clickFinishButton() {
        await this.page.locator(this.finishButton).click();
    }

    async validateOrderMessage() {
        return await this.page.locator(this.orderMessage);
    }
}