import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I Sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).selectOption(sortOption);
});
When('Validate all the items are sorted correctly by price {string}', async (sortOption: string) => {
  const itemPrices = await new Product(getPage()).retrieveItemPrices();
  await new Product(getPage()).verifySortOrderByPrice(sortOption, itemPrices);
});

When('Validate all the items are sorted correctly by name {string}', async (sortOption: string) => {
  const itemNames = await new Product(getPage()).retrieveItemNames();
  await new Product(getPage()).verifySortOrderByName(sortOption, itemNames);
});