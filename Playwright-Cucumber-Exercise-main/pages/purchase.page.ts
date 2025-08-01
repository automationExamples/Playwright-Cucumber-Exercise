import { Page } from "@playwright/test"

export class Purchase {
    private readonly page: Page
    private readonly pageHeaderText: string = '[data-test="title"]'
    private readonly cartItemName: string = '(//*[@data-test="inventory-item-name"])[1]'
    private readonly cartItemQuantity: string = '(//div[@data-test="item-quantity"])[1]'
    private readonly checkoutButton: string = '[data-test="checkout"]'
    private readonly firstNameField: string = '[data-test="firstName"]'
    private readonly lastNameField: string = '[data-test="lastName"]'
    private readonly postalCodeField: string = '[data-test="postalCode"]'
    private readonly continueButton: string = '[data-test="continue"]'
    private readonly finishButton: string = '[data-test="finish"]'
    private readonly checkmarkImage: string = '[data-test="pony-express"]'
    private readonly completeTitle: string = '[data-test="complete-header"]'
    private readonly completeText: string = '[data-test="complete-text"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validatePageHeaderText(expectedHeader: string) {
        let pageHeader = await this.page.locator(this.pageHeaderText).textContent()
        if (pageHeader !== expectedHeader) {
          throw new Error(`Expected title to be ${expectedHeader} but found ${pageHeader}`);
        }
    }

    public async validateCartItemNamesAndQuantity(expectedCartValues: Map<string, string>) {
        const cartNameQuantityMap = new Map();

        const cartItems = await this.page.locator(this.cartItemName);
        const cartQtys = await this.page.locator(this.cartItemQuantity);

        const itemCount = await cartItems.count();

        for (let i = 0; i < itemCount; i++) {
            const itemName = (await cartItems.nth(i).textContent())?.trim();
            const itemQty = (await cartQtys.nth(i).textContent())?.trim();

                if (itemName && itemQty) {
                cartNameQuantityMap.set(itemName, itemQty);
                }
        }

        for (const [expectedName, expectedQty] of expectedCartValues.entries()) {
            const actualQty = cartNameQuantityMap.get(expectedName);
            if (actualQty !== expectedQty) {
            throw new Error(`Expected item '${expectedName}' to have quantity '${expectedQty}', but got '${actualQty}'`);
            }
        }
        return cartNameQuantityMap;
    }

    public async clickCheckoutButton() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillCheckoutYourInfoForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
        await this.page.locator(this.continueButton).click();
    }

    public async clickFinishButton() {
        await this.page.locator(this.finishButton).click();
    }

    async isCheckmarkVisible() {
        return await this.page.locator(this.checkmarkImage).isVisible();
    }

    async getTitleText() {
        return await this.page.locator(this.completeTitle).textContent();
    }

    async getCompleteText() {
        return await this.page.locator(this.completeText).textContent();
    }
}
