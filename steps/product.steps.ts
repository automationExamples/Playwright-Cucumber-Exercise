import { ProductPage } from "../pages/ProductPage";
import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { Product } from "../pages/product.page";

Then('I will add the backpack to the cart', async function 
{  const productpagePage = new ProductPage(this.page);
 () {
  const product = new Product(this.page);
  await product.addBackPackToCart();
});

Then("I will select the cart", async function () {
  await productpagePage.action1();
});

Then("I will select Checkout", async function () {
  await productpagePage.action2();
});

Then(
  /^I will fill in the First Name "([^"]+)", Last Name "([^"]+)", and Zip\/Postal Code "([^"]+)"$/,
  async function (first: string, last: string, zip: string) {
    await productpagePage.action3();
    await productpagePage.action4();
    await productpagePage.action5();
  }
);

Then("I will select Continue", async function () {
  await productpagePage.action6();
});

Then("I will select Finish", async function () {
  await productpagePage.action7();
});

Then("I should see the purchase text {string}", async function (text: string) {
  await expect(this.page.locator('[data-test="complete-header"]')).toHaveText(
    text
  );
});

type Direction = "ascending" | "descending";

Then("I sort the items by {string}", async function (label: string) {
  const dir: Direction = /low to high/i.test(label)
    ? "ascending"
    : "descending";
  (this as any)._sortDirection = dir;

  await productpagePage.action8();
  await productpagePage.action9()
    label,
  });
  await productpagePage.action10(); // wait for list to refresh
});

Then("I validate all 6 items are sorted correctly by price", async function () {
  const dir: Direction = (this as any)._sortDirection ?? "ascending";
  const priceTexts: string[] = await this.page
    .locator(".inventory_item_price")
    .allTextContents();

  expect(priceTexts.length).toBe(6);

  const prices: number[] = priceTexts.map((t: string) =>
    parseFloat(t.replace("$", ""))
  );
  const expected = [...prices].sort((a, b) =>
    dir === "ascending" ? a - b : b - a
  );
  expect(prices).toEqual(expected);
});
