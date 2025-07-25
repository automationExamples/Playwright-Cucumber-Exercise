 import { Then } from '@cucumber/cucumber';
 import { getPage } from '../playwrightUtilities';
 import { Product } from '../pages/product.page';

 Then('Sort the items by {string}', async function (sortType) {
     await new Product(getPage()).selectSort(sortType);  
         });
 Then('Validate all {int} items are sorted correctly by price', async function (itemCount) {
     await new Product(getPage()).sortedPrice();
         });
