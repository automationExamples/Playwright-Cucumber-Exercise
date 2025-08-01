import { When, Then, After, Status } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

When('I click the Checkout button', async () => {
  await new Purchase(getPage()).clickCheckoutButton();
});

When('I fill in the Checkout form with values {string}, {string}, and {string} and click Continue', async (firstName, lastName, postalCode) => {
  await new Purchase(getPage()).fillCheckoutYourInfoForm(firstName, lastName, postalCode);
});

When('I click the Finish button', async () => {
  await new Purchase(getPage()).clickFinishButton();
});

Then('I should see the Checkout Complete page with the header {string} and the text {string}',
  async function (expectedTitle: string, expectedText: string) {
    const page = getPage();
    const purchase = new Purchase(page);

    try {
      const isVisible = await purchase.isCheckmarkVisible();
      const headerText = await purchase.getTitleText();
      const completeText = await purchase.getCompleteText();

      expect(isVisible).toBeTruthy();
      expect(headerText?.trim()).toBe(expectedTitle);
      expect(completeText?.trim()).toBe(expectedText);

      const successScreenshot = await page.screenshot({ path: './snapshots/success-checkout.png', type: 'png' });
      if (this.attach) {
        this.attach(successScreenshot, 'image/png');
      }
    } catch (error) {
      const screenshot = await page.screenshot({ path: './snapshots/error-screenshot.png', type: 'png' });

      if (this.attach) {
        this.attach(screenshot, 'image/png');
      }

      throw error;
    }
  }
);
