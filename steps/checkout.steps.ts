import {Then} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import {Checkout} from '../pages/checkout.page'
import {Login} from "../pages/login.page";


Then('I select the cart', async () => {
    await new Checkout(getPage()).clickOnElement("Cart");
});


Then('Select Checkout', async () => {
    await new Checkout(getPage()).clickOnElement("Checkout");
});

Then('Select Continue', async () => {
    await new Checkout(getPage()).clickOnElement("continue");
});

Then('Select Finish', async () => {
    await new Checkout(getPage()).clickOnElement("finish");
});

Then('Fill in the First Name, Last Name, and Zip Code', async () => {
    await new Checkout(getPage()).fillCustomerInformation();
});

Then('Validate the text {string}', async (Message) => {
    await new Checkout(getPage()).ValidateMessage(Message)
});