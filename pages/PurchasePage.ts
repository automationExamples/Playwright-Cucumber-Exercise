import { Page, expect } from "@playwright/test";

export class PurchasePage {
  constructor(private page: Page) {}

  async action1() {
    await this.page.fill('[data-test="username"]', user)
  }
  async action2() {
    await this.page.fill('[data-test="password"]', "secret_sauce")
  }
  async action3() {
    await this.page.click('[data-test="login-button"]')
  }
  async action4() {
    await this.page.waitForURL("**/inventory.html")
  }

}
