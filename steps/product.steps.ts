import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  const productPage = new Product(getPage());
  await productPage.addBackPackToCart();
});

Then('I sort products by {string}', async (sortOption: string) => {
  const productPage = new Product(getPage());
  await productPage.sortByOption(sortOption);
});

Then('the first product displayed should be {string}', async (expectedName: string) => {
  const productPage = new Product(getPage());
  await productPage.validateFirstProduct(expectedName);
});

Then('the last product displayed should be {string}', async (expectedName: string) => {
  const productPage = new Product(getPage());
  await productPage.validateLastProduct(expectedName);
});
