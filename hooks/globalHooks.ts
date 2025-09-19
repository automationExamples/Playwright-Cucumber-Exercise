import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { initializeBrowser, initializePage, closeBrowser, getPage } from '../playwrightUtilities';
import fs from 'fs';
import path from 'path';

setDefaultTimeout(60 * 1000); // default 60s timeout

Before(async () => {
  await initializeBrowser();
  await initializePage();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const page = getPage();
    const screenshotsDir = path.resolve('screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }

    const fileName = scenario.pickle.name.replace(/\s+/g, '_') + '.png';
    const filePath = path.join(screenshotsDir, fileName);

    // Screenshot kaydet
    await page.screenshot({ path: filePath });

    // Cucumber HTML report için attach
    if (this.attach) {
      const imageBuffer = await page.screenshot();
      await this.attach(imageBuffer, 'image/png');
    }
  }

  await closeBrowser();
});
