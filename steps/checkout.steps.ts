import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Cart } from "../pages/cart.page";
import { checkout } from "../pages/checkout.page";
import { assertEquals } from "../assertions";

const first_name = "John";
const last_name = "Doe";
const postal_code = "12345";

Then('I Select Checkout', async function () {
    await new Cart(getPage()).clickCheckoutButton();
  });

  Then('I fill out my information', async function () {
    await new checkout(getPage()).fillOutInformation(first_name, last_name, postal_code);
  });

  Then('I Select Continue', async function () {
    await new checkout(getPage()).clickContinueButton();
  });

  Then('I Select Finish', async function () {
    await new checkout(getPage()).clickFinishButton();
  });

  Then('I Validate the text {string}', async function (exoectedText) {
    const actualText = await new checkout(getPage()).getCompleteOrderText();
    assertEquals(exoectedText, actualText);
  });