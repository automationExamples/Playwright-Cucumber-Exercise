import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Purchase } from '../pages/purchase.page';

When('I sort the products by {string}',
  async function (sortOption) {
  await new Product(getPage()).selectSortByOption(sortOption);
});

Then('I should see all products sorted by {string}',
  async function (sortOption) {
  await new Product(getPage()).validateProductPagePriceSort(sortOption);
});

When('I add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I click the cart at the top-right, validate the page header {string}, and validate the expected cart values of {string} and {string}',
    async function (expectedHeader, expectedItemName, expectedQuantity) {
    await new Product(getPage()).clickShoppingCart();
    await new Purchase(getPage()).validatePageHeaderText(expectedHeader);

    const expectedCartValues = new Map();
    expectedCartValues.set(expectedItemName, expectedQuantity);

    await new Purchase(getPage()).validateCartItemNamesAndQuantity(expectedCartValues);
  }
);





