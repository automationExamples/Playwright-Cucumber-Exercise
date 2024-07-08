import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';

import { Login } from '../pages/login.page';

import { Purchase } from '../pages/purchase.page';


Then('I will click on add to cart', async () => {
     await new Purchase(getPage()).addToCart();
  });

Then('I will select the cart', async () => { 
    await  new Purchase(getPage()).selectCart();

  });

Then('I will click on Checkout', async () => {
    await new Purchase(getPage()).selectCheckOut();

 
  });

Then('I will fill the Details', async () => {
    await new Purchase(getPage()).fillDetails()
  });


Then('I will click on Finish', async () => {
    await new Purchase(getPage()).finishCheckout;
 
  });

  Then('I will validate the confirmation  messsage', async () => {
    await new Purchase(getPage()).validateConfirmMessage();
 
  });





