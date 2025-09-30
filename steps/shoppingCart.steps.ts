import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { ShoppingCart } from '../pages/shoppingCart.page';

Then('I will select the cart', async () => {
  await new ShoppingCart(getPage()).selectCart()
})

Then('I will select checkout', async () => {
    await new ShoppingCart(getPage()).clickCheckout()
})

Then('I will enter {string}, {string}, and {string}', async(firstName, lastName, postalCode) => {
    await new ShoppingCart(getPage()).enterCheckoutInformation(firstName, lastName, postalCode);
})

Then('I will select continue', async() => {
    await new ShoppingCart(getPage()).clickContinue()
})

Then('I will select finish', async() => {
    await new ShoppingCart(getPage()).clickFinish()
})

Then('I will validate the text {string}', async (confirmationMessage) => {
    await new ShoppingCart(getPage()).validateConfirmationMessage(confirmationMessage)
})