import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';


Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackpackToCart();
});

// Step definition for opening the shopping cart
Then('I will select the cart', async () => {
  await new Product(getPage()).openShoppingCart();
});

// Step definition for sorting products by price
Then('I will sort the items by {string}', async (sortOption) => {
  await new Product(getPage()).sortByPrice(sortOption);
});

// Step definition for validating product price sorting
Then('I should see all 6 items sorted correctly by {string}', async (sortOption) => {
  await new Product(getPage()).validatePriceSorting(sortOption);
});
