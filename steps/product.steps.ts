import { Then,When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I will click on the cart icon', async () => {
  await new Product(getPage()).clickOnCartButton();
});

When('Sort the items by {string}', async (sortOrder: string) => {
  await new Product(getPage()).sortItemsBy(sortOrder);
});

Then('Validate all {int} items are sorted correctly by price {string}', async (int ,sortOrder: string) => {
  await new Product(getPage()).verifyProductOrder(sortOrder);
});


Then('Validate all items are sorted alphabetically by {string}', async (sortOrder: string) => {
  const expectedOrder = getOrderBasedOnSortOrder(sortOrder); 
  await new Product(getPage()).validateProducts(expectedOrder);
});

function getOrderBasedOnSortOrder(sortOrder: string): string[] {
  switch (sortOrder) {
    case "Price (high to low)":
      return ['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Bike Light', 'Sauce Labs Onesie'];
    case "Price (low to high)":
      return ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
    case "Name (A to Z)":
      return ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];
    case "Name (Z to A)":
      return ['Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack'];
    default:
      // Handle other sort types or throw an error
      throw new Error(`Unsupported sort type: ${sortOrder}`);
  }
}