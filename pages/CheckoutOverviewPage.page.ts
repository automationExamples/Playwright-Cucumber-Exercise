import { Page, Locator, expect } from "@playwright/test";

export class CheckoutOverviewPage {
  private readonly page: Page;

  private readonly finishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishBtn = this.page.locator("button#finish");
  }

  public async clickFinish() {
    await this.finishBtn.click();
  }
}
