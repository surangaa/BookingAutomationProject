import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pageobjects/search.page.js';
import ProductPage from '../pageobjects/product.page.js';
import { setValue, getValue } from '@wdio/shared-store-service'

Then(/^the location should be selected as (.*)$/, async (message) => {
	// verify the location
    await SearchPage.clickSearch();
    await SearchPage.verifyLocation(message);
});

When(/^user clicks on 5 star rating$/, async () => {
    //select 5 star option for rating
	await SearchPage.selectRating();
});

When(/^User filters price lowest products$/, async () => {
    //select pricelowest option from the filter dropdown
	await SearchPage.selectSortBypriceOption();
});

When(/^User selects second product on the list$/, async () => {
    //select the second product from the list
	let pdetails = await ProductPage.selectSecondProduct();
    var key = Object.keys(pdetails)[0];
    var key3 = Object.keys(pdetails)[1];

    await setValue("productprice", pdetails[key3]);
    // console.log('passing value' + pdetails.productname)
    await ProductPage.verifyProductDetails(pdetails[key]);
});

When(/^user selects Rooms count and proceed$/, async() => {
//select Room count 
	await ProductPage.selectRoomCount()

});