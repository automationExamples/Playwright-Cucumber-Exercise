import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Checkout } from '../pages/checkout.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I go to the cart', async () => {
  await new Product(getPage()).goToCart();
});

Then('I go to checkout', async () => {
  await new Product(getPage()).goToCheckout();
});

Then('I fill in the form details', async () => {
  await new Checkout(getPage()).fillInCheckoutDetails('John', 'Doe', '12345');
});

Then('I select Finish', async () => {
  await new Checkout(getPage()).finishCheckout();
});

Then('I validate the text {string}', async (expectedText) => {
  await new Checkout(getPage()).validateText(expectedText);
});
When('I sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});

Then('I validate all 6 items are sorted correctly by price in {string} order', async (sortOrder) => {
  await new Product(getPage()).validateItemsSortedByPrice(sortOrder);
});

Then('I validate the first item price is {string}', async (firstItemPrice) => {
  await new Product(getPage()).validateFirstItemPrice(firstItemPrice);
});

Then('I validate the last item price is {string}', async (lastItemPrice) => {
  await new Product(getPage()).validateLastItemPrice(lastItemPrice);
});