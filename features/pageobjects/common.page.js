import data from '../test-Data/url.js'

class CommonPage {
    async openHomePage() {
      //load the booking.com website url
      await browser.url(data.url1);
      
    }
  
    verifyPageUrl = async () => {
      //verify the url
      await expect(browser).toHaveUrlContaining('booking')
      console.log('booking.com url is loaded')
    }
  }
  
  export default new CommonPage();