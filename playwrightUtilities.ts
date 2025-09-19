import { chromium, Browser, Page, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

export const initializeBrowser = async () => {
  browser = await chromium.launch({ headless: false }); // ister true yapabilirsin
  context = await browser.newContext();
};

export const initializePage = async () => {
  if (!context) {
    throw new Error('Context has not been initialized. Call initializeBrowser first.');
  }
  page = await context.newPage();
};

export const getPage = (): Page => {
  if (!page) {
    throw new Error('Page has not been initialized. Please call initializePage first.');
  }
  return page;
};

export const closeBrowser = async () => {
  await page?.close();
  await context?.close();
  await browser?.close();
};
