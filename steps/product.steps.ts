import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Purchase } from '../pages/purchase.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I sort the products by {string}',
  async function (sortOption) {
  await new Product(getPage()).selectSortByOption(sortOption);
});

Then('I should see all products sorted by {string}',
  async function (sortOption) {
  await new Product(getPage()).validateProductPagePriceSort(sortOption);
});

When('Select the cart displayed at the top right', async ()=>{
  await new Product(getPage()).clickShoppingCart();
});

Then('I should see the page header {string}',
  async function (expectedHeader) {
  await new Purchase(getPage()).validatePageHeaderText(expectedHeader);
});