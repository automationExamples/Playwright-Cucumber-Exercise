import { Then } from '@cucumber/cucumber';
import { When} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { DataTable } from '@cucumber/cucumber';
import { table } from 'console';
import { expect } from '@playwright/test';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

// following added by MAdhavi -- STARTS
When('I select the cart from top right', async () => {
  await new Product(getPage()).ClickTheCart();
});

When('I click on Checkout button', async () => {
  await new Product(getPage()).ClickCheckoutButton();
});

Then('verify that checkout page is displayed', async () => {
   await new Product(getPage()).verifyChkoutPgDisplayed();
});

Then('verify that Product page is displayed', async () => {
   await new Product(getPage()).verifyProductPgDisplayed();
});

When('I select option {string}', async (String) =>{
    await new Product(getPage()).sortOptionSelect(String);
});


Then('I should see prices in {string} order for items:', async function (order: string, dataTable: DataTable) {
    
     //Parse the DataTable given in the step
     const dataItemsAndPrice = dataTable.hashes().map(row =>   ({
       prdName: row.Items.trim(),
       price: parseFloat(row.Price.replace('$', '').trim())

     }));

     // Sort the Items by PRICE - Ascending or Descending
     let sortAscDesc: {prdName: string; price: number}[] = [];

     if (order === 'Ascending') {
         sortAscDesc = [...dataItemsAndPrice].sort((a, b) => a.price - b.price);
        } else if (order === 'Descending') {
          sortAscDesc = [...dataItemsAndPrice].sort((a, b) => b.price - a.price);
        } else {
          throw new Error(`Invalid sort order: ${order}`);
        }

     // Get all items and their pricing from Page 
     const allItemsFromPg= await new Product(getPage()).verifySortedItemsAndPricing();
     // Above returns array of {Name, Price}
     // compare both Arrays and verify sorting is successful corresponding to its product names
     console.log('EXPECTED:', allItemsFromPg);
     console.log('RECEIVED:', sortAscDesc);
      expect(allItemsFromPg).toEqual(sortAscDesc);
    
});




 
