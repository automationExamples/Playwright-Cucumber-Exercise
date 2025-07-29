import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

Then("I will add the backpack to the cart", async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then("I sort products by price {string}", async (sort: string) => {
  let sortOption: string = "";
  if (sort === "hilo") {
    sortOption = "Price (high to low)";
  } else if (sort === "lohi") {
    sortOption = "Price (low to high)";
  }
  await new Product(getPage()).sortByOption(sortOption);
});

Then("I validate products are sorted by price {string}", async (sort) => {
  const prices: number[] = await new Product(getPage()).getProductPrices();
  const sorted: number[] = [...prices].sort((a, b) => (sort === "lohi" ? a - b : b - a));
  if (JSON.stringify(prices) !== JSON.stringify(sorted)) {
    throw new Error(`Expected sorted prices: ${sorted}, got: ${prices}`);
  }
});

Then("I sort products by name {string}", async (sort: string) => {
  let sortOption: string = "";
  if (sort === "nameaz") {
    sortOption = "Name (A to Z)";
  } else if (sort === "nameza") {
    sortOption = "Name (Z to A)";
  }
  await new Product(getPage()).sortByOption(sortOption);
});

Then("I validate products are sorted by name {string}", async (sort) => {
  const product: Product = new Product(getPage());
  const names: string[] = await product.getProductNames();
  const sorted: string[] = [...names].sort((a, b) =>
    sort === "nameaz" ? a.localeCompare(b) : b.localeCompare(a)
  );
  if (JSON.stringify(names) !== JSON.stringify(sorted)) {
    throw new Error(`Expected sorted names: ${sorted}, got: ${names}`);
  }
});
