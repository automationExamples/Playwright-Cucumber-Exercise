import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
export let page: Page;

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  const context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await page.close();
});

AfterAll(async function () {
  await browser.close();
});
