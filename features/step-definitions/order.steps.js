import { Given, When, Then } from '@wdio/cucumber-framework';
import OrderPage from '../pageobjects/order.page.js';
import { setValue, getValue } from '@wdio/shared-store-service'

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