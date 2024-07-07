import { When, Then} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkoutoverviewcomplete } from '../pages/checkoutoverviewcomplete.page';


Then('I validate the product {string} , quantity {string} and price {string} details', async (productItem,productquantity,productprice) => {
  await new Checkoutoverviewcomplete(getPage()).verifyCheckOutOverview(productItem,productquantity,productprice);
});


Then('I select finish', async () => {
  await new Checkoutoverviewcomplete(getPage()).finish();
});

Then('I should see the order confirmation message {string}', async (orderconfirmationMsg) => {
  await new Checkoutoverviewcomplete(getPage()).verifyOrderConfirmationMsg(orderconfirmationMsg);
});
