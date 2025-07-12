import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';


// sorting --------------------------------------------------------------

Then('I will sort the items from low to high', async () => {
  //locator for the sort selector, then identifies the the sort method "low to high"
  await getPage().locator('.product_sort_container').selectOption('lohi');
});

Then('I will sort the items from high to low', async () => {
  //locator for the sort selector, then identifies the the sort method "high to low"
  await getPage().locator('.product_sort_container').selectOption('hilo');
});


Then('I will validate all 6 items are in the correct order by PRICE', async () => {
  //locator for the price in each container
  const itemContainers = getPage().locator('.inventory_item_price');
  const prices: number[] = [];

  //counts all the containers on the page
  const count = await itemContainers.count();

  //for loop that collects the price text for each container
  for (let i = 0; i < count; i++) {
    //specifically this part collect the price text
    const priceText = await itemContainers.nth(i).textContent();
    //this part makes dollar signs($) disappear 
    //and if the value is null or undefined it will replace it with a 0 so its still a number for sorting
    prices.push(parseFloat(priceText?.replace('$', '') || '0'));
  }

  //reads the current selected element in the locator that is the sorting option
  const currentSort = await getPage().locator('.product_sort_container').inputValue();
  //and if the sorting option is 'lohi' then we define that as ascending order
  const isAscending = currentSort === 'lohi';

  //a for loop that is meant to actually start reading to see if these are in proper order
  for (let i = 0; i < prices.length - 1; i++) {
    //if its in ascending order and the price[i](the current price being read) is greater than the next price; price[i+1] then we throw an error cuz thats obvi wrong 
    if (isAscending && prices[i] > prices[i + 1]) {
      throw new Error(`Prices are not sorted in ascending order: ${prices}`);
    }
    //same diff as the top but oposite. indicated by the '!' before isAscending and the < being flipped
    if (!isAscending && prices[i] < prices[i + 1]) {
      throw new Error(`Prices are not sorted in descending order: ${prices}`);
    }
  }
});


//----------------------------------------------------------


//add to cart but this line was made by yall not me
Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

//from here and down is all me
//we click the cart, this could have been an simple and fast script where is all under 1 'Then' statement but i see the vision here will all the verifications
Then('I will click cart', async () => {
  await getPage().locator('[data-test="shopping-cart-link"]').click();
})

//i wont comment this section too much with the steps i do feel that their 'text' explains it just fine
Then('I will click check out', async () => {
  await getPage().locator('[data-test="checkout"]').click();
});

Then('I will fill out the details', async () => {
  await getPage().locator('[data-test="firstName"]').fill('ian');
  await getPage().locator('[data-test="lastName"]').fill('holt');
  await getPage().locator('[data-test="postalCode"]').fill('12345');
});

Then('I will click continue', async () => {
  await getPage().locator('[data-test="continue"]').click();
});

Then('I will click finish', async () => {
  await getPage().locator('[data-test="finish"]').click();
});

//but here we will go into the public and private async use
//here is a simple set up for us wanting to have an expected finish message that just tells us that we completed the purchase (or if it failed) but for now head on over to the product.page.ts for the rest
Then('I should see a message {string}', async (expectedFinishMessage) => {
  await new Product(getPage()).validateFinishMessage(expectedFinishMessage);
});

//--------------------------------------------------------------------------
//My addition to the tests

Then('I will add the first 3 items to the cart', async () => {
  const product = new Product(getPage());
  await product.addItemsToCart(3);
});

Then('I will verify 3 items are here', async () => {
    const product = new Product(getPage());
    await product.verifyItemsRound1();
});

Then('I will remove 1 item from the cart', async () => {
  await getPage().locator('button:has-text("Remove")').nth(0).click();
});

Then('I will verify 2 items are here', async () => {
    const product = new Product(getPage());
    await product.verifyItemsRound2();
});
