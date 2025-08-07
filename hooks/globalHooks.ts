import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { closeBrowser, initializeBrowser, initializePage } from '../playwrightUtilities';

// Increase default timeout for steps to 15 seconds
setDefaultTimeout(15000);

Before(async function () {
  await initializeBrowser();
  await initializePage();
});

After(async function () {
  await closeBrowser();
});
