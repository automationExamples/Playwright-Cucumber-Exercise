import { Browser, chromium, Page } from 'playwright';

let browser: Browser | null = null;
let page: Page | null = null;
const DEFAULT_TIMEOUT = 30000;

export const initializeBrowser = async () => {
  if (!browser) {
   // browser = await chromium.launch({ headless: false}); -- Commented by Venkatesh Bellamkonda
   browser = await chromium.launch({ headless: false,args: ["--start-maximized"],});   // -- Added by Venkatesh Bellamkonda
  }
};

export const initializePage = async () => {
  if (browser && !page) {
    const context = await browser.newContext({ viewport: null });
    page = await context.newPage(); //added by Venkatesh Bellamkonda
    //page = await browser.newPage();   -- Commented by Venkatesh Bellamkonda
    page.setDefaultTimeout(DEFAULT_TIMEOUT);
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

