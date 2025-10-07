import { Page, expect } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async action1() {
    await this.page.locator("a.shopping_cart_link").click()
  }
  async action2() {
    await this.page.getByRole("button", { name: /checkout/i }).click()
  }
  async action3() {
    await this.page.fill('[data-test="firstName"]', first)
  }
  async action4() {
    await this.page.fill('[data-test="lastName"]', last)
  }
  async action5() {
    await this.page.fill('[data-test="postalCode"]', zip)
  }
  async action6() {
    await this.page.click('[data-test="continue"]')
  }
  async action7() {
    await this.page.getByRole("button", { name: /finish/i }).click()
  }
  async action8() {
    await this.page.waitForURL("**/inventory.html")
  }
  async action9() {
    await this.page.selectOption('[data-test="product-sort-container"]', {
  }
  async action10() {
    await this.page.waitForLoadState("networkidle")
  }

}
