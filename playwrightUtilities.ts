import { Browser, chromium, Page } from 'playwright';

let browser: Browser | null = null;
let page: Page | null = null;

export const initializeBrowser = async () => {
  if (!browser) {
    browser = await chromium.launch({ headless: false });
  }
};

export const initializePage = async () => {
  if (browser && !page) {
    page = await browser.newPage();
  }
};

export const getPage = (): Page => {
  if (!page) {
    throw new Error('Page has not been initialized. Please call initializePage first.');
  }
  return page;
};

export const closeBrowser = async () => {
  if (browser) {
    await browser.close();
    browser = null;
    page = null;
  }
};