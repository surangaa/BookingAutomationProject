class HomePage {
  get countryButton() {
    return $("/html/body/div[1]/div/header/nav[1]/div[2]/span[2]/button");
  }

  get modalCloseButton() {
    return $("aria/Dismiss sign-in info.");
  }

  get countryUkButton() {
    return $("button*=English (UK)");
  }

  get countryUkButton2() {
    return $("aria/Language: English (UK)");
  }

  get currencyButton() {
    return $(
      "/html[1]/body[1]/div[1]/div[1]/header[1]/nav[1]/div[2]/span[1]/button[1]"
    );
  }

  get currencyUsdButton() {
    return $("button*=United States Dollar");
  }

  get currencyButton2() {
    return $("aria/Prices in United States Dollar");
  }
  get staysButton() {
    return $("//a[@id='accommodations']");
  }

  get alertCloseBtn(){
    return $('div[class="notice-item-close-x"]')
  }

  get alert(){
    return $('div[data-cart-id="6B0DD26C-F6D0-11ED-9F7E-1B9359924B0A"]')
  }

  async selectCountry() {

    await this.modalCloseButton.click();

    //click on home page country btn
    await this.countryButton.click();

    //selelct Uk as the country
    // await browser.pause(1000);
    await this.countryUkButton.click();
  }

  async selectCurrency() {
    //click on home page currency btn
    await this.currencyButton.click();
    //selelct usd as the currency
    await this.currencyUsdButton.click();
  }

  async clickStaysBtn() {
    //click stays button
    await this.staysButton.click();
  }

  async dismissAlert() {
    //dimiss the alert
    browser.pause(10000)
    await this.alertCloseBtn.click();
  }

  async checkForAlert() {
    //verify whether the alert is opened
    browser.pause(2000)
    let isOpen = await this.alertCloseBtn.isDisplayed();
    console.log(isOpen);
    await expect(isOpen).toEqual(false);
  }
}

export default new HomePage();
