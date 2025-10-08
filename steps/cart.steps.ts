import { Given, Then} from "@cucumber/cucumber";
import { Cart } from "../pages/cart.page";
import { getPage } from "../playwrightUtilities";

Then('I select Checkout', async () => {
    await new Cart(getPage()).checkout();
});

Then('I will enter required checkout information {string} {string} {string}', async (firstName, lastName, postalCode) => {
    await new Cart(getPage()).enterCheckoutInfo(firstName, lastName, postalCode);
});

Then('I select Continue', async () => {
    await new Cart(getPage()).continue();
});

Then('I select Finish', async () => {
    await new Cart(getPage()).finish();
});

Then('I will calculate the tax and total', async () => {
    await new Cart(getPage()).calculateTotal();
});

Then('I should see success text {string}', async (expectedText) => {
	await new Cart(getPage()).getSuccessText(expectedText);
});