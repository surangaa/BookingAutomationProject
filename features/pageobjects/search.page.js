class SearchPage {
  get locationInput() {
    return $("//input[@id=':Ra9:']");
  }

  get checkinCheckoutInput() {
    return $('div[data-testid="searchbox-dates-container"]');
  }

  get checkinDate() {
    return $('aria/14 June 2023');
  }

  get checkoutDate() {
    return $('aria/16 June 2023');
  }

  get adultChildCountInput() {
    return $('button[data-testid="occupancy-config"]');
  }

  get minusButton() {
    return $(
      "/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[1]"
    );
  }

  get doneButton() {
    return $("button*=Done");
  }

  get searchButton() {
    return $("button*=Search");
  }

  get starRateCheckbox() {
    return $("//input[@id=':Rlf94q:']");
  }

  get SortByButton() {
    return $("button*=Sort by:Top picks for solo travellers");
  }

  get priceLowestListitem() {
    return $("button*=Price (lowest first)");
  }

  get text() {
    return $(".fcab3ed991 d5f78961c3");
  }

  get selectedCheckinDate() {
    return $('button[data-testid="date-display-field-start"]');
  }

  get selectedCheckoutDate() {
    return $('button[data-testid="date-display-field-end"]');
  }

  async selectLocation(location) {
    //select location
    await this.locationInput.setValue(location);
    // await browser.keys("Down arrow");
    // await browser.keys("\uE007");
  }

  async selectCheckinCheckout() {
    await this.checkinCheckoutInput.click();
    //select checkin time
    await this.checkinDate.click();

    //select checkout time
    await this.checkoutDate.click();
  }

  async selelctAdultChildCount() {
    //click on dropdown button
    await this.adultChildCountInput.click();
    //select adult count
    await this.minusButton.click();
    //click done button
    await this.doneButton.click();
  }

  async clickSearch() {
    //click serach button
    await this.searchButton.click();
  }

  async verifyLocation(location) {
    //verify location
    await expect(text).toHaveTextContaining(location);
  }

  async selectRating() {
    //click star 5 rating
    await this.starRateCheckbox.click();
  }

  async selectSortBypriceOption() {
    //select price lowest option
    await this.SortByButton.click();
    await this.priceLowestListitem.click();
  }

  async verifyCheckinDate() {
    //get checkin date
    const elem8 = await this.selectedCheckinDate;
    let checkindate = await elem8.getText();

    return checkindate;
  }

  async verifyCheckoutDate() {
    //get checkout date
    const elem9 = await this.selectedCheckoutDate;
    let checkoutdate = await elem9.getText();

    return checkoutdate;
  }
}

export default new SearchPage();
