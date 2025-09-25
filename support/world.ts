// import { setWorldConstructor, World } from '@cucumber/cucumber';
// import { Browser, Page, chromium } from 'playwright';

// export class CustomWorld extends World {
//   browser!: Browser;
//   page!: Page;

//   async initializePage() {
//     this.browser = await chromium.launch({ headless: false });
//     this.page = await this.browser.newPage();
//   }

//   async closeBrowser() {
//     if (this.browser) await this.browser.close();
//   }
// }

// setWorldConstructor(CustomWorld);
// --------------------------------------------------------------------

// support/world.ts
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async initializePage() {
    this.browser = await chromium.launch({ headless: true }); // set headless:true for CI
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
