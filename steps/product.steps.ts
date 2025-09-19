import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the product to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I purchase the product', async () => {
    await new Product(getPage()).clickPurchase();
});

Then('Fill in the {string}, {string}, and {string}', async (fName: string, lName: string, zipCode: string): Promise<void> => {
    await new Product(getPage()).enterCustomerInfo(fName, lName, zipCode);
});