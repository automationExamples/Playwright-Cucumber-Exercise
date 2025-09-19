import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { expect } from "@playwright/test";

Then('I select the cart', async () => {
    const page = getPage();
    await page.click('.shopping_cart_link');
});
Then('I select Checkout', async () => {
    const page = getPage();
    await page.click('#checkout');
});
Then('I fill in First Name {string}, Last Name {string}, and Zip Code {string}',
    async (first: string, last: string, zip: string) => {

        const page = getPage();
        await page.fill('#first-name', first);
        await page.fill('#last-name', last);
        await page.fill('#postal-code', zip);
    });
Then('I select Continue', async () => {
    const page = getPage();
    await page.click('#continue');
});
Then('I select Finish', async () => {
    const page = getPage();
    await page.click('#finish');
});
Then('I should see purchase confirmation {string}', async (confMessage: string) => {
    const page = getPage();
    const actualText = await page.textContent('.complete-header');
    await expect(actualText).toBe(confMessage);
    if (actualText != confMessage) {
        throw new Error(`Expected: ${confMessage}, Found: ${actualText}`);
    }
});
