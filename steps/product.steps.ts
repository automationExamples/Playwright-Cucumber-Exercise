import { Then } from '@cucumber/cucumber';
import { Product } from '../pages/product.page';
import { getPage } from '../playwrightUtilities';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});
Then('I select the cart', async () => {
  await new Product(getPage()).selectCart();
});

Then('I select Checkout', async () => {
  await new Product(getPage()).selectCheckout();
});

Then('I fill in the First Name Last Name and Zip Code', async () => {
  await new Product(getPage()).fillInNameAndPostalCode();
});

Then('I select Continue', async () => {
  await new Product(getPage()).selectContinue();
});

Then('I select Finish', async () => {
  await new Product(getPage()).selectFinish();
});

Then('I should validate the text {string}', async (text: string) => {
  await new Product(getPage()).validateText(text);
});

Then('I sort the products by {string}', async (sort: string) => {
  await new Product(getPage()).sortItemsByPrice(sort);
});

Then('wait for the page to load', async () => {
  await new Product(getPage()).validateText('Products');
});

Then('I will validate all 6 items are sorted correctly by price', async () => {
  await new Product(getPage()).validateSortedItems();
});