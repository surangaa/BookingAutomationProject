import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import CommonPage from '../pageobjects/common.page.js';
import SearchPage from '../pageobjects/search.page.js';
import { setValue, getValue } from '@wdio/shared-store-service'
import report from '@wdio/allure-reporter'


When(/^the user perform country selection$/,async () => {
    //country selelction method is called
    await CommonPage.verifyPageUrl();
    report.addStep('verifing the page url')

    await HomePage.selectCountry();
    report.addStep('selecting the country UK from country list')

});

Then(/^the country should be changed to UK$/, async () => {
    //verify the country selection
    const elem = await HomePage.btn_CountryUk2
    await expect(elem).toBeDisplayed();
    report.addStep('verify whether UK is selected')

});

When(/^the user perform currency selection$/, async () => {
     //currency selelction method is called
    await HomePage.selectCurrency();
    report.addStep('selelcting the currency as USD')

});


Then(/^the currency should be changed to USD$/,async () => {
    await browser.pause(3000);
    //verify the currency selection
    const elem2 = await HomePage.btn_CurrencyUsd2
    await expect(elem2).toBeDisplayed()
    report.addStep('verify whether USD is selected')

});

 
When(/^the user click on Stays tab$/, async () => {
    //select Stays tab
	await HomePage.clickStaysBtn()
    report.addStep('selecting Stays tab')

});

Then(/^the tab should be changed to Stays$/, async () => {
	await browser.pause(3000);
    //verify Stays tab selection
    const elem3 = await SearchPage.tf_Location
    await expect(elem3).toBeDisplayed()
    report.addStep('verify whether the location input is loaded')

});

When(/^the user enter the (.*)$/, async (location) => {
    //type the location
    report.addStep('selecting the location')
	await SearchPage.selectLocation(location);

});

When(/^the user selects check in and check out dates$/, async() => {
    //selelct checkin and checkout times
	const dd = await SearchPage.selectCheckinCheckout();
    

    var key1 = Object.keys(dd)[0];
    var key2 = Object.keys(dd)[1];

    report.addStep('select checkin and checkout dates')

    await setValue("checkindate", dd[key1]);
    await setValue("checkoutdate", dd[key2]);
    report.addStep('store checkin and checkout dates in local storage')
 
});

When(/^the user select adults and child count$/, async() => {
    //select adult,child and room count
	await SearchPage.selelctAdultChildCount();
    report.addStep('selecting adult, child and rooms count')

});




When(/^user dismisses the alert$/, async () => {
    //dismiss the alert
    await HomePage.dismissAlert()
    report.addStep('dismiss the alert')

});

Then(/^alert should not be present$/, async () => {
    //verify whether the alert is opened
	await HomePage.checkForAlert()
    report.addStep('check whether the alert is present on the page')

});







