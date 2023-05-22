import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import CommonPage from '../pageobjects/common.page.js';
import SearchPage from '../pageobjects/search.page.js';
import ProductPage from '../pageobjects/product.page.js';
import OrderPage from '../pageobjects/order.page.js';
import { setValue, getValue } from '@wdio/shared-store-service'


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
	const dd = await SearchPage.selectCheckinCheckout();
    var key1 = Object.keys(dd)[0];
    var key2 = Object.keys(dd)[1];

    await setValue("checkindate", dd[key1]);
    await setValue("checkoutdate", dd[key2]);

 
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
    var key3 = Object.keys(pdetails)[1];

    await setValue("productprice", pdetails[key3]);
    // console.log('passing value' + pdetails.productname)
    await ProductPage.verifyProductDetails(pdetails[key]);
});

When(/^user selects Rooms count and proceed$/, async() => {
//select Room count 
	await ProductPage.selectRoomCount()

});

Then(/^checkout, checkin dates and amount should be same$/, async () => {
  //verify booking details in the Order Page
  const cid = await getValue("checkindate");
  const cod = await getValue("checkoutdate");
  const pp = await getValue("productprice");
//   console.log('pp'+ pp)

//   console.log('cid and cod and pp' + cid + ' ' +cod + ' '+ pp )
  await OrderPage.verifyBooking(cid, cod, pp);
});

When(/^user enters (.*), (.*) and (.*) and click Next$/, async (firstname, lastname, emailaddress) => {
    //fill firstname, lastname and email 
	const accdetails = await OrderPage.fillDetailsForm(firstname, lastname, emailaddress)
    console.log('account details'+accdetails)
    var key5 = Object.keys(accdetails)[0];
    var key6 = Object.keys(accdetails)[1];
    var key7 = Object.keys(accdetails)[2];


    await setValue("fname", accdetails[key5]);
    await setValue("lname", accdetails[key6]);
    await setValue("email", accdetails[key7]);


});


Then(/^entered details should be same$/, async () => {
    const fn = await getValue("fname");
    const ln = await getValue("lname");
    const em = await getValue("email");
    // console.log(fn+ ln+ em);

    //verify form details
	await OrderPage.verifyFormDetails(fn, ln, em)
});

When(/^user dismisses the alert$/, async () => {
    //dismiss the alert
    await HomePage.dismissAlert()
});

Then(/^alert should not be present$/, async () => {
    //verify whether the alert is opened
	await HomePage.checkForAlert()
});







