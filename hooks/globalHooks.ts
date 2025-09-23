import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

setDefaultTimeout(60_000);

declare module "@cucumber/cucumber" {
  interface World {
    browser: Browser;
    context: BrowserContext;
    page: Page;
  }
}

Before( async function() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After( async function() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
});