import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../pageobjects/search.page.js';
import ProductPage from '../pageobjects/product.page.js';
import { setValue, getValue } from '@wdio/shared-store-service'
import report from '@wdio/allure-reporter'


Then(/^the location should be selected as (.*)$/, async (message) => {
	// verify the location
    await SearchPage.clickSearch();
    report.addStep('perform a search')

    await SearchPage.verifyLocation(message);
    report.addStep('verify the location')
});

When(/^user clicks on 5 star rating$/, async () => {
    //select 5 star option for rating
	await SearchPage.selectRating();
    report.addStep('select the 5 star rating')
});

When(/^User filters price lowest products$/, async () => {
    //select pricelowest option from the filter dropdown
	await SearchPage.selectSortBypriceOption();
    report.addStep('select lowest price option from the dropdown')
});

When(/^User selects second product on the list$/, async () => {
    //select the second product from the list
	let pdetails = await ProductPage.selectSecondProduct();
    report.addStep('select second product from the list')

    var key = Object.keys(pdetails)[0];
    var key3 = Object.keys(pdetails)[1];

    await setValue("productprice", pdetails[key3]);
    report.addStep('storing product price in the local storage')

    await ProductPage.verifyProductDetails(pdetails[key]);
    report.addStep('verify product details')

});

When(/^user selects Rooms count and proceed$/, async() => {
//select Room count 
	await ProductPage.selectRoomCount()
    report.addStep('select the room count and proceed')

});