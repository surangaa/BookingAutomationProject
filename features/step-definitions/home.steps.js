import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import CommonPage from '../pageobjects/common.page.js';
import SearchPage from '../pageobjects/search.page.js';
import ProductPage from '../pageobjects/product.page.js';
import OrderPage from '../pageobjects/order.page.js';
import productPage from '../pageobjects/product.page.js';
import { expect as Chaiexpect } from "chai";

Given(/^The user is on Home page$/, async () => {
    //load the booking.com website url
    await CommonPage.openHomePage();
});


When(/^the user perform country selection$/,async () => {
    //country selelction method is called
    await CommonPage.verifyPageUrl();
    await HomePage.selectCountry();
   
});

Then(/^the country should be changed to UK$/, async () => {
    //verify the country selection
    const elem = await HomePage.countryUkButton2
    await expect(elem).toBeDisplayed();
    
});

When(/^the user perform currency selection$/, async () => {
     //currency selelction method is called
    await HomePage.selectCurrency();
});


Then(/^the currency should be changed to USD$/,async () => {
    await browser.pause(3000);
    //verify the currency selection
    const elem2 = await HomePage.currencyButton2
    await expect(elem2).toBeDisplayed()
});

 
When(/^the user click on Stays tab$/, async () => {
    //select Stays tab
	await HomePage.clickStaysBtn()
});

Then(/^the tab should be changed to Stays$/, async () => {
	await browser.pause(3000);
    //verify Stays tab selection
    const elem3 = await SearchPage.locationInput
    await expect(elem3).toBeDisplayed()
});

When(/^the user enter the (.*)$/, async (location) => {
    //type the location
	await SearchPage.selectLocation(location);
});

When(/^the user selects check in and check out dates$/, async() => {
    //selelct checkin and checkout times
	await SearchPage.selectCheckinCheckout();
});

When(/^the user select adults and child count$/, async() => {
    //select adult,child and room count
	await SearchPage.selelctAdultChildCount();
});


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
    // console.log('passing value' + pdetails.productname)
    await ProductPage.verifyProductDetails(pdetails[key]);
});

When(/^user selects Rooms count and proceed$/, async() => {
//select Room count 
	await ProductPage.selectRoomCount()
});

Then(/^checkout, checkin dates and amount should be same$/, async() => {
    //verify booking details in the Order Page
	await OrderPage.verifyBooking()
});

When(/^user enters firstname,lastname and email and click Next$/, async () => {
    //fill firstname, lastname and email 
	await OrderPage.fillDetailsForm()
});


Then(/^entered details should be same$/, async () => {
    //verify form details
	await OrderPage.verifyFormDetails()
});

When(/^user dismisses the alert$/, async () => {
    //dismiss the alert
    await HomePage.dismissAlert()
});

Then(/^alert should not be present$/, async () => {
    //verify whether the alert is opened
	await HomePage.checkForAlert()
});







