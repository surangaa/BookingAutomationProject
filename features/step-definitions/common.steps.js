import { Given, When, Then } from '@wdio/cucumber-framework';
import CommonPage from '../pageobjects/common.page.js';
import report from '@wdio/allure-reporter'

Given(/^The user is on Home page$/, async () => {
    //load the booking.com website url
    await CommonPage.openHomePage();
    report.addStep('opening the web page with booking.com url')
});
