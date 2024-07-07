import { Then,When} from '@cucumber/cucumber';

import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from "@playwright/test";

// Then('I will add the backpack to the cart', async () => {
//   await new Product(getPage()).addBackPackToCart();
// });
Then('I will add the {string} to the cart', async (itemName) => {
  await new Product(getPage()).addItemToCart(itemName);
});

When('I sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});

Then('I verify the items are sorted by {string}', async (sortType: string) => {

  const productPage = new Product(getPage());
  switch(sortType){

    case 'Price (high to low)':
      let allpriceshtl = await new Product(getPage()).getAllItemPrices();
   const sortedhtl = await new Product(getPage()).isSortedDescendingorAscending(allpriceshtl);
   console.log("sort found as : " + sortedhtl)
   expect(sortedhtl).toEqual('descending');
   break;
    case 'Price (low to high)':
      const allpriceslth = await new Product(getPage()).getAllItemPrices();
       const sortedlth = await new Product(getPage()).isSortedDescendingorAscending(allpriceslth);
    console.log("sort found as : " + sortedlth)
    expect(sortedlth).toEqual('ascending');
     
        break;
      
    case 'Name (A to Z)':
      let allnames = await new Product(getPage()).getItemNames();
      const sortedatz = await new Product(getPage()).isSortedDescendingorAscending(allnames);
      console.log("sort found as : " + sortedatz)
      expect(sortedatz).toEqual('ascending');

        break;
    case 'Name (Z to A)':
      const allnameszta = await new Product(getPage()).getItemNames();
      const sortedzta = await new Product(getPage()).isSortedDescendingorAscending(allnameszta);
      console.log("sort found as : " + sortedzta)
      expect(sortedzta).toEqual('descending');
    
        break;

    default:

    throw new Error(`Unsupported sort type: ${sortType}`);
}

});
