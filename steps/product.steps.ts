import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('Add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('Click on Cart', async () => {
  await new Product(getPage()).clickOnCartButton();
});

When('Sort the items by {string}', async (sortName) => {
  await new Product(getPage()).selectSortOption(sortName);
});

Then('Validate all 6 items are sorted correctly by {string}', async(sortName) => {
  const listOfProducts = await new Product(getPage()).getListOfProductsByPriceSort(sortName);
  
});
