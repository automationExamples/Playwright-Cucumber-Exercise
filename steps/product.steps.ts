import { Given,  When, Then } from '@cucumber/cucumber';
import { Page,Locator, ElementHandle, chromium, expect } from "@playwright/test";
import { LoginPage } from '../pages/purchase.page';
import { InventoryPage } from '../pages/inventory.page';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Login } from '../pages/login.page';
import { error } from 'console';

let page: Page;
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let products: Product[];
let sortedProducts: Product[];


//Given('I open the {string} page', async (url) => {
//  await getPage().goto(url);
//});



//Then("I will login as {string}'", async () => {
// loginPage = new LoginPage(page);
//  await loginPage.loginAsUser('standard_user');
//});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});



When ('I sort the items by {string}', async (sortOption) => {
  const page = getPage();
  inventoryPage = new InventoryPage(page);
await inventoryPage.sortProductsByPrice(sortOption, products);
sortedProducts = await inventoryPage.getProducts();
});



Then('I validate all 6 items are sorted correctly by price {string}', async (sortBy) => {
  

  
  for (let i=0; i<sortedProducts.length-1;i++){
    const currentProduct = sortedProducts[i];
    const nextProduct = sortedProducts[i +1];
    if(currentProduct?.price && nextProduct?.price && currentProduct.price > nextProduct.price){
      throw new Error(`Products are not sorted correctly. Item at Index ${i} has price ${currentProduct.price}, 
        but item at index ${i+1} has price ${nextProduct.price}`);
    }
      
     }
 
});




