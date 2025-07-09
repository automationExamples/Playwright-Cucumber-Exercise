import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';


Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackpackToCart();
});

Then('Select the cart (top-right)', async () => {
  await new Product(getPage()).openCart();
});

Then(/^Sort the items by Price \((low to high|high to low)\)$/, async function (sortOption: string) {
  this.sortOption = `Price (${sortOption})`;
  await new Product(getPage()).selectSortOption(this.sortOption);
});

Then('Validate all 6 items are sorted correctly by price', async function () {
  await new Product(getPage()).assertPricesSorted(this.sortOption);
});