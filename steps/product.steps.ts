import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I will click the cart', async () => {
  await new Product(getPage()).clickOnCartButton();
});

When('I click on logout', async () => {
  await new Product(getPage()).clickOnLogout();
});

When('I sort the items by {string}', async (sortType: string) => {
  await new Product(getPage()).sortItemsBy(sortType);
});

Then('I validate all items are correctly sorted by {string}', async (sortType: string) => {
  const expectedOrder = getExpectedOrderBasedOnSortType(sortType); 
  await new Product(getPage()).validateProductOrder(expectedOrder);
});

function getExpectedOrderBasedOnSortType(sortType: string): string[] {
  switch (sortType) {
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
      throw new Error(`Unsupported sort type: ${sortType}`);
  }
}
