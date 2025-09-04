import { Given } from "@cucumber/cucumber";

Given("I open the {string} page", async function (url: string) {
  const page = (this as any).page;
  await page.goto(url, { waitUntil: "domcontentloaded" });
});
