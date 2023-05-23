import { start } from "chromedriver";

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
    return $('button*=Sort by');
  }

  get priceLowestListitem() {
    return $('button*=Price (lowest first)');
  }

  get textHeading() {
    return $('h1*=properties found');
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

  }

  async selectCheckinCheckout() {
    await this.checkinCheckoutInput.click();
    //select checkin time
    await this.checkinDate.click();

    //select checkout time
    await this.checkoutDate.waitForClickable({timeout: 2000, timeoutMsg:'checkout date is not clickable'})
    await this.checkoutDate.click();

    let cd = await this.getDates();
    return cd;
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

  async verifyLocation(message) {
    //verify location
    await expect(this.textHeading).toHaveTextContaining(message);
  }

  async selectRating() {
    await this.starRateCheckbox.scrollIntoView();
    //click star 5 rating
    await this.starRateCheckbox.click();
  }

  async selectSortBypriceOption() {
    await this.SortByButton.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    //select price lowest option
    await this.SortByButton.click();
    await this.priceLowestListitem.click();
  }

  async getDates() {
    //get checkin date and checkout date
    let checkindate = await this.selectedCheckinDate.getText();
    let checkoutdate = await this.selectedCheckoutDate.getText();
    return {checkindate, checkoutdate};
  }

}

export default new SearchPage();
