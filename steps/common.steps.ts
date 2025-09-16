import { Given } from "@cucumber/cucumber";


Given("I open the {string} page", async function (url: string) {
  await this.context.open(url);
});