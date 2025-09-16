import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then("I should see the title {string}", async function (expected: string) {
  await expect(this.page).toHaveTitle(expected);
});

Then(/^I will login as '([^']+)'$/, async function (user: string) {
  const page = this.page;
  await page.fill('[data-test="username"]', user);
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');

  if (user !== "locked_out_user") {
    await page.waitForURL("**/inventory.html", { waitUntil: "load" });
  }
});

Then("I should see login error {string}", async function (msg: string) {
  const err = this.page.locator('[data-test="error"]');
  await expect(err).toBeVisible();
  await expect(err).toContainText(msg);
});
