test('Verify product sorting by price', async ({}) => {
    const { page } = await getPage(); 
    const productListingPage = new ProductListingPage(page);

    
    await Given('I am on the product listing page');
    await When('I sort products by "high to low"');
    await Then('products should be sorted by price "high to low" correctly');

});
