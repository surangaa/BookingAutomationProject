import data from '../test-Data/url.js'

class CommonPage {
    async openHomePage() {
      //load the booking.com website url
      //to get the url by environment '/' can be used within brackets. zthen you have to run the app using cmd.
      //first set environment to either DEV or QA using SET ENV=DEV/ SET ENV=QA
      //then run npm run test
      await browser.url(data.url1);
    
    }
  
    verifyPageUrl = async () => {
      //verify the url
      await expect(browser).toHaveUrlContaining('booking')
      console.log('booking.com url is loaded')
    }
  }
  
  export default new CommonPage();