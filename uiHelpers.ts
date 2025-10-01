import { Browser, chromium, Page } from 'playwright';

export const clickOnButtonByRole = async (page: Page, name: string) => {
  await page.getByRole('button', { name }).click();
};

export const fillField = async (page: Page, fieldName: string, value: string) => {
  await page.getByPlaceholder(fieldName).fill(value);
};
