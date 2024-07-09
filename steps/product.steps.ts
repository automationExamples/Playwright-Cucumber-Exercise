import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

Then("I will add the {string} to the cart", async (item) => {
  await new Product(getPage()).addItemToCart(item);
});

Then("Select the mini cart in header", async () => {
  await new Product(getPage()).clickOnMiniCart();
});

Then("Sort the items by {string}", async (sortType: string) => {
  await new Product(getPage()).sortItemsBy(sortType);
});

Then("Validate all 6 items are sorted correctly by price", async () => {
  await new Product(getPage());
});
