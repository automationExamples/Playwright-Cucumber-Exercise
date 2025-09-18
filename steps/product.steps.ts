import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I sort the items by {string}', async function (sort: string) {
  await this.page.selectOption('.product_sort_container', { label: sort });
});

Then('I validate all 6 items are sorted correctly by price', async function () {
  
});