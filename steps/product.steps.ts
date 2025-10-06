import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
    await new Product(getPage()).addBackPackToCart();
});

Then('I sort the items by {string}', async (sortOption) => {
    await new Product(getPage()).sortItems(sortOption);
});

Then('I validate all items are sorted correctly by price in {string} order', async (sortOrder) => {
    await new Product(getPage()).validatePriceSort(sortOrder);
});

Then('I should see the cart is empty', async () => {
  await new Product(getPage()).validateCartIsEmpty();
});

Then('I should see the cart still contains items', async () => {
  await new Product(getPage()).validateCartHasItems();
});