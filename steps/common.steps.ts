import { Given } from "@cucumber/cucumber";
import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";

Given('I open the {string} page', async (url) => {
    await getPage().goto(url);
  });

 // Taking screenshots and attaching to report
Then('I take a screenshot', async function () {
  const screenshot = await getPage().screenshot({ fullPage: true });

  // Attach to Cucumber report (important: use `function()` syntax, not arrow function)
 this.attach(screenshot, 'image/png');
});
