import { When, Then } from '@cucumber/cucumber'
import { getPage } from '../playwrightUtilities'
import { Checkout } from '../pages/checkout.page'

When('I open the shopping cart', async () => {
    await new Checkout(getPage()).openCart()
})

When('I proceed to checkout', async () => {
    await new Checkout(getPage()).selectCheckout()
})

When('I enter my checkout information', async () => {
    await new Checkout(getPage()).enterCheckoutInformation()
})

When('I continue the checkout', async () => {
    await new Checkout(getPage()).continueCheckout()
})

When('I finish the purchase', async () => {
    await new Checkout(getPage()).finishPurchase()
})

Then('I should see the purchase confirmation {string}', async (expectedMessage) => {
    await new Checkout(getPage()).validateConfirmation(expectedMessage)
})