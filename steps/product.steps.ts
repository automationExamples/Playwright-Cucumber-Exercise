import { Then,When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

/**
 * Step definition to sort the items based on the provided order.
 * @param sortOrder - The sorting order (e.g., 'Price (low to high)', 'Price (high to low)')
 */
When('I sort the items by {string}', async (sortOrder) => {
  const product = new Product(getPage());
  await product.sortItems(sortOrder);
});


/**
 * Step definition to validate that all items are sorted correctly by price.
 * @param sortOrder - The sorting order used to validate the items (e.g., 'Price (low to high)', 'Price (high to low)')
 */
Then('I validate all 6 items are sorted correctly by price {string}', async (sortOrder) => {
  const product = new Product(getPage());
  await product.validateSortedItems(sortOrder);
});

