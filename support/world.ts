import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // Initialize browser, context, and page
  async initializePage() {
    this.browser = await chromium.launch({ headless: false }); // set to true if you don't need GUI
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  // Close browser
  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Register the custom world
setWorldConstructor(CustomWorld);
