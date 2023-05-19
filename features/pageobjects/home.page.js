
class HomePage {

    get countryButton () {
        return $('/html/body/div[1]/div/header/nav[1]/div[2]/span[2]/button');
    }

    get modalCloseButton () {
        return $('aria/Dismiss sign-in info.');
    }

    get countryUkButton () {
        return $('button*=English (UK)');
    }

    get countryUkButton2 () {
        return   $('aria/Language: English (UK)');
    }
  
    get currencyButton() {
        return $('/html[1]/body[1]/div[1]/div[1]/header[1]/nav[1]/div[2]/span[1]/button[1]');
    }

    get currencyUsdButton() {
        return $('button*=United States Dollar');
    }

    get currencyButton2(){
       return $('aria/Prices in United States Dollar');
    }
    get staysButton(){
        return $("//a[@id='accommodations']");
    }
    
      

    async selectCountry() {
        //click on home page country btn
        await this.countryButton.click()
        // await browser.pause(2000);
        //click on close button of the modal dialog
        await this.modalCloseButton.click()
        //selelct Uk as the country
        // await browser.pause(1000);
        await this.countryUkButton.click()
            
    }

    async selectCurrency () {
        //click on home page currency btn
        // await browser.pause(1000);
        await this.currencyButton.click()
        //selelct usd as the currency
        // await browser.pause(1000);
        await this.currencyUsdButton.click()
    }

    async clickStaysBtn() {
        //click stays button
        await this.staysButton.click()
    }

    async dismissAlert(){
        //dimiss the alert
        await browser.dismissAlert();
    }

    async checkForAlert(){
        //verify whether the laert is opened
        const isOpen = browser.isAlertOpen();
        console.log(isOpen)
        await expect(isOpen).toEqual(false)
    }
    
}

export default new HomePage();