import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Carts } from '../pages/carts.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will Select the cart \\(top-right)', async() => {
  await new Product(getPage()).clickOnCart();
});

Then('I Select Checkout', async() =>{
  await new Carts(getPage()).checkout();
});


Then('Fill in the First Name, Last Name, and Zip\\/Postal Code', async() =>{
  await new Carts(getPage()).enterUserdetails();
});

Then('Select Continue', async() =>{
  await new Carts(getPage()).clickonContinue();
});

Then('Select Finish', async() =>{
  await new Carts(getPage()).clickonFinish();
});


Then('Validate the text {string}', async(successMsg) =>{
  await new Carts(getPage()).validateSuccessMsg(successMsg);
});



