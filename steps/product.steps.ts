import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});
Then('I will select the cart', async () =>{
  await new Product(getPage()).gotoshoppingCart();
});
Then('I will select the checkOut', async () =>{
  await new Product(getPage()).checkOut();
});
Then('I will fill first last and zip code as {string} {string} and {string}', async (fName, lName, zipCode) => {
  await new Product(getPage()).checkOutInfo(fName, lName, zipCode);
});
Then('I will select the continue', async () => {
  await new Product(getPage()).continue();
});
Then('I will select the Finish', async () => {
  await new Product(getPage()).finish();
});
Then('I validate the text {string}', async (message:string) =>{
  await new Product(getPage()).validateOrderCompleteMsg(message);
});
Then('I select sort by {string}', async (option: string) => {
  await new Product(getPage()).sortOptions(option)
});
Then('validate all items are sorted correctly by {string}', async (sort: string) => {
  await new Product(getPage()).validateSorting(sort)
});
