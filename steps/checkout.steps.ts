import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { CheckoutPage } from "../pages/checkout.page";

Then(/I will Select the cart \(top-right\)/, async function () {
    await new CheckoutPage(getPage()).openCart();
});

Then("I will Select Checkout", async function () {
    await new CheckoutPage(getPage()).clickCheckout();
});

Then(/I will Fill in the First Name, Last Name, and Zip\/Postal Code/, async function () {
    await new CheckoutPage(getPage()).fillCustomerInformation(
        "John",
        "Smith",
        "61704"
    );
});

Then("I will Select Continue", async function () {
    await new CheckoutPage(getPage()).clickContinue();
});

Then("I will Select Finish", async function () {
    await new CheckoutPage(getPage()).clickFinish();
});

Then("Validate the text 'Thank you for your order!'", async function () {
    await new CheckoutPage(getPage()).expectConfirmationMessage("Thank you for your order!");
});
