import { Then } from '@cucumber/cucumber';
import { When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('navigate to cart', async () => {
  await new Product(getPage()).navigateToCart();
});

When('I will click on Checkout Button', async () => {
  await new Product(getPage()).clickOnCheckout();
});

When('I click on Continue Button', async () => {
  await new Product(getPage()).clickOnContinue();
});

Then('I click on Finish Button', async () => {
  await new Product(getPage()).clickOnFinish();
});

Then('the message {string} should be displayed', async (expectedMessage) => {
  await new Product(getPage()).validateMessage(expectedMessage);
});

Then('I will enter shipping details {string} {string} {string}', async (firstName, lastName, zipcode) => {
  await new Product(getPage()).shippingDetails(firstName, lastName, zipcode);
});

When('I select the {string} sort option', async (sortOrder: string) => {
  await new Product(getPage()).sortByOrder(sortOrder);
});

Then('the products must be sorted by {string} based by price', async (inventoryPrice: string) => {
  await new Product(getPage()).sortByPrice(inventoryPrice);
});

Then('price for the first product should be {string}', async (firstPrice: string) => {
  await new Product(getPage()).firstProductPrice(firstPrice);
});

Then('price for the last product should be {string}', async (lastPrice: string) => {
  await new Product(getPage()).lastProductPrice(lastPrice);
});