import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will proceed to checkout', async () => {
  await getPage().locator('.shopping_cart_link').click();  // Open cart
  await getPage().locator('.checkout_button').click();  // Click checkout
});

Then('I will fill in the First Name, Last Name, and Zip/Postal Code', async () => {
  await getPage().fill('input[name="firstName"]', 'John');
  await getPage().fill('input[name="lastName"]', 'Doe');
  await getPage().fill('input[name="postalCode"]', '12345');
});

Then('I will select Continue', async () => {
  await getPage().locator('.cart_checkout_container .btn_primary').click();  // Click continue
});

Then('I will select Finish', async () => {
  await getPage().locator('.cart_checkout_container .btn_action').click();  // Click finish
});

Then('I should see the text {string}', async (expectedText) => {
  const actualText = await getPage().locator('.complete-header').textContent();
  if (actualText !== expectedText) {
    throw new Error(`Expected text to be "${expectedText}" but found "${actualText}"`);
  }
});
