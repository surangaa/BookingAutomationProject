import data from '../test-Data/url.js'

class CommonPage {
    async openHomePage() {
      //to get the url by environment '/' can be used within brackets. 
      // make sure to comment line 6-13 and line 108 in wdio.conf.js
      //comment line 107 in wdio.conf.js
      // you have to run the app using cmd.
      //first set environment to either DEV or QA using SET ENV=DEV/ SET ENV=QA
      //then run npm run test
      await browser.url(data.urlqa);
     //load the booking.com website url
    }
  
    verifyPageUrl = async () => {
      //verify the url
      await expect(browser).toHaveUrlContaining('booking')
      console.log('booking.com url is loaded')
    }
  }
  
  export default new CommonPage();