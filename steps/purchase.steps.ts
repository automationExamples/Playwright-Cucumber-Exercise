import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Checkout } from '../pages/checkout.page';
import { Cart } from '../pages/cart.page';

Then('I will Select the Cart', async ()=> {
    await new Product(getPage()).gotoCart()
});

Then('I will Select Checkout', async ()=> {
    await new Cart(getPage()).checkoutTheItem();
});

Then('I will Fill in the {string}, {string}, and {string} Code', async (firstname, lastName, zipcode)=> {
    await new Checkout(getPage()).enterRequiredDetails(firstname, lastName, zipcode);
});

Then('I Select Continue', async ()=> {
    await new Checkout(getPage()).clickContinue();
});

Then('I Select Finish', async ()=> {
    await new Checkout(getPage()).clickFinish();
});

Then('I validate the text {string}', async (thankyouNote)=> {
    await new Checkout(getPage()).validateThankYouNote(thankyouNote); 
});