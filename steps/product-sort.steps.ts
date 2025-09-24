import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I sort products by {string}', async (sortText) => {
  await new Product(getPage()).sortBy(sortText);
});

Then('I should see products sorted by {string}', async (sortText) => {
  const lower = sortText.toLowerCase();
  if (lower.includes('low')) {
    await new Product(getPage()).validatePricesSorted('low-to-high');
  } else if (lower.includes('high')) {
    await new Product(getPage()).validatePricesSorted('high-to-low');
  } else {
    // default -  treat as low-to-high
    await new Product(getPage()).validatePricesSorted('low-to-high');
  }
});