import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import CommonPage from '../pageobjects/common.page.js';
import SearchPage from '../pageobjects/search.page.js';
import { setValue, getValue } from '@wdio/shared-store-service'


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




When(/^user dismisses the alert$/, async () => {
    //dismiss the alert
    await HomePage.dismissAlert()
});

Then(/^alert should not be present$/, async () => {
    //verify whether the alert is opened
	await HomePage.checkForAlert()
});







