import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Purchase } from "../pages/purchase.page";

Then("I select the cart", async () => {
  await new Purchase(getPage()).openCart();
});

Then("I select Checkout", async () => {
  await new Purchase(getPage()).checkout();
});

Then(
  "I fill in First Name {string}, Last Name {string}, Zip {string}",
  async (f, l, z) => {
    await new Purchase(getPage()).fillUserDetails(f, l, z);
  }
);

Then("I select Continue", async () => {
  await new Purchase(getPage()).continue();
});

Then("I select Finish", async () => {
  await new Purchase(getPage()).finish();
});

Then("I should see the success message {string}", async (msg) => {
  await new Purchase(getPage()).validateSuccessMessage(msg);
});