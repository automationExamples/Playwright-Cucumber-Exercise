import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Login } from "../pages/login.page";

Then("I will login as {string}", async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then("User received login error message", async () => {
  await new Login(getPage()).validateLoginError();
});
