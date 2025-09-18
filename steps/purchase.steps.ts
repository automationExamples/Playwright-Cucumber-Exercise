import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';
import { Product } from '../pages/product.page';


 Then('I will add the backpack to the cart', async ()=>{
  await new Purchase(getPage()).addBackPackToCart();
});


 Then('Select the cart \\(top-right)', async ()=> {
           await new Purchase(getPage()).openCart();
         });

 Then('Select Checkout', async () => {
  await new Purchase(getPage()).checkout();
});

Then(
  'Fill in the First Name {string}, Last Name {string}, and Postal Code {string}',
  async (first: string, last: string, zip: string) => {
    await new Purchase(getPage()).fillUserInfo(first, last, zip);
  }
);


Then('Select Continue', async () => {
  await new Purchase(getPage()).continueCheckout();
});

Then('Select Finish', async () => {
  await new Purchase(getPage()).finishCheckout();
});

Then('Validate the text {string}', async (expected: string) => {
  await new Purchase(getPage()).validateSuccessMessage(expected);
});

