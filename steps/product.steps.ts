import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

Then("I will add the backpack to the cart", async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('Sort the items by {string}', async function (sortOption: string) {
  await new Product(getPage()).selectSortOption(sortOption);
});

Then(/Validate all '(\d+)' items are sorted correctly by (price|name)/, async function (expectedCount: string, type: string) {
  const expected = parseInt(expectedCount as string, 10);
  await new Product(getPage()).validateSortOrder(expected, type);
});
