import { Given, Then} from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

Given('I open the {string} page', async (url) => {
    await getPage().goto(url);
  });

Then('I open the cart page', async () => {
    await new Product(getPage()).openCart();
  });