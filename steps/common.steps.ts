import { CommonPage } from "../pages/CommonPage";
import { Given } from "@cucumber/cucumber";


Given("I open the {string} page", async function 
{  const commonpagePage = new CommonPage(this.page);
 (url: string) {
  const page = (this as any).page;
  await page.goto(url, { waitUntil: "domcontentloaded" });
});