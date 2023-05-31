class HomePage {
  get btn_Country() {
    return $('button[data-testid="header-language-picker-trigger"]');
  }

  get btn_ModalClose() {
    return $(
      'button[class="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 ae1678b153"]');
  }

  get btn_CountryUk() {
    return $("button*=English (UK)");
  }

  get btn_CountryUk2() {
    return $("aria/Language: English (UK)");
  }

  get btn_Currency() {
    return $('button[data-testid="header-currency-picker-trigger"]');
  }

  get btn_CurrencyUsd() {
    return $("button*=United States Dollar");
  }

  get btn_CurrencyUsd2() {
    return $("aria/Prices in United States Dollar");
  }
  get btn_Stays() {
    return $('a[aria-controls="accommodations"]');
  }

  get btn_AlertClose() {
    return $('div[class="notice-item-close-x"]');
  }

  async selectCountry() {
    await this.btn_ModalClose.click();
    //click on home page country btn
    await this.btn_Country.click();

    //selelct Uk as the country
    await this.btn_CountryUk.click();
  }

  async selectCurrency() {
    //click on home page currency btn
    await this.btn_Currency.click();
    //selelct usd as the currency
    await this.btn_CurrencyUsd.click();
  }

  async clickStaysBtn() {
    //click stays button
    await this.btn_Stays.click();
  }

  async dismissAlert() {
    //dimiss the alert
    await this.btn_AlertClose.waitForExist({timeout: 10000});
    await this.btn_AlertClose.click();
  }

  async checkForAlert() {
    //verify whether the alert is opened
    browser.pause(2000);
    let isOpen = await this.btn_AlertClose.isDisplayed();
    await expect(isOpen).toEqual(false);
  }
}

export default new HomePage();
