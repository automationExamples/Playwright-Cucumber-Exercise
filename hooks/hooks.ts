import { BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import path from 'path';
import { promises as fs } from 'fs';

const screenshotDir = path.join(process.cwd(), 'reports', 'screenshots');
async function ensureScreenshotDir() {
  await fs.mkdir(screenshotDir, { recursive: true });
}

setDefaultTimeout(60_000);

let browser: Browser;

declare module '@cucumber/cucumber' {
  interface World {
    context: BrowserContext;
    page: Page;
    baseURL?: string;
  }
}

BeforeAll(async function () {
  browser = await chromium.launch(); 
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});

