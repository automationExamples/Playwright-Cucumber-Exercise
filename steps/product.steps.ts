import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "../hooks/hooks";

When("I sort items by {string}", async function (sortType: string) {
  await page.selectOption(".product_sort_container", { label: sortType });
});

Then("all items should be sorted correctly by {string}", async function (sortType: string) {
  const prices = await page.$$eval(".inventory_item_price", els =>
    els.map(el => parseFloat(el.textContent!.replace("$", "")))
  );

  const sortedPrices = [...prices].sort((a, b) =>
    sortType.includes("low") ? a - b : b - a
  );

  expect(prices).toEqual(sortedPrices);
});
