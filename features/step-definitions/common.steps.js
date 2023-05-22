import { Given, When, Then } from '@wdio/cucumber-framework';
import CommonPage from '../pageobjects/common.page.js';

Given(/^The user is on Home page$/, async () => {
    //load the booking.com website url
    await CommonPage.openHomePage();
});
