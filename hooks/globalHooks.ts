// hooks.ts
import { Before, After, Status } from '@cucumber/cucumber';
import { initializeBrowser, initializePage, closeBrowser, getPage } from '../playwrightUtilities';
import fs from 'fs';
import path from 'path';

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

    await page.screenshot({ path: filePath });


    if (this.attach) {
      const imageBuffer = await page.screenshot();
      await this.attach(imageBuffer, 'image/png');
    }
  }

  await closeBrowser();
});