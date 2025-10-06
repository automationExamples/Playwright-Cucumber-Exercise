import { Given, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';
import { Product } from '../pages/product.page';



Then('I will sort the products by {string}', { timeout: 30000 }, async (sortOption: string) => {
  const productPage = new Product(getPage());
  await productPage.sortProducts(sortOption);
});


  Then('I should verify all {int} products are sorted correctly by {string}', 
  async (count: number, sortOption: string) => {
    const productPage = new Product(getPage());
    await productPage.validateSortOrder(sortOption);
});

Then('I print all filter dropdown options', async () => {
  const productPage = new Product(getPage());
  const options = await productPage.printFilterOptions();
  console.log('Filter dropdown has these options:', options);
});






