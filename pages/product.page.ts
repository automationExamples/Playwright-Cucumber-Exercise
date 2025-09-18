import { Page } from '@playwright/test';

export class Product {
  private readonly page: Page;
  private readonly sortDropdown = '.product_sort_container';
  private readonly priceSelector = '.inventory_item_price';

  constructor(page: Page) {
    this.page = page;
  }

  async sortItemsBy(option: string) {
    await this.page.locator(this.sortDropdown).selectOption({ label: option });
  }

  

}