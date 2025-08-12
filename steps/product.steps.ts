import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

//product sorting
Then('I sort the product list by price option {string}', async (sortText: string) => {
  await new Product(getPage()).selectSort(sortText);
});

Then('the product prices should be sorted in {string} order', async (order: 'asc' | 'desc') => {
  await new Product(getPage()).validatePricesSorted(order);
});

//cart & checkout
Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});


//added by Senia

Then('I open the shopping cart', async () => {
  await new Product(getPage()).openCart();
});

Then('I proceed to checkout', async () => {
  await new Product(getPage()).checkout();
});

Then('I enter checkout information: first name {string}, last name {string}, postal code {string}',
  async (firstName: string, lastName: string, postalCode: string) => {
    await new Product(getPage()).fillCheckoutInfo(firstName, lastName, postalCode);
});

Then('I continue to the checkout overview', async () => {
  await new Product(getPage()).continueCheckout();
});

Then('I complete the purchase', async () => {
  await new Product(getPage()).finishCheckout();
});

Then('I should see the order confirmation message {string}', async (message: string) => {
  await new Product(getPage()).validateConfirmationMessage(message);
});