class SearchPage {
  get tf_Location() {
    return $("//input[@id=':Ra9:']");
  }

  get dd_Location() {
    return $$('div[class="cd1e09fdfe"]');
  }

  get btn_CheckinDate() {
    return $('td span[data-date="2023-06-20"]');
  }

  get btn_CheckoutDate() {
    return $('td span[data-date="2023-06-22"]');
  }

  get tf_AdultChildCount() {
    return $('button[data-testid="occupancy-config"]');
  }

  get btn_Minus() {
    return $$('div[class="e98c626f34"] button');
  }

  get btn_Done() {
    return $("button*=Done");
  }

  get btn_Search() {
    return $("button*=Search");
  }

  get chk_StarRate() {
    return $("//input[@id=':Rlf94q:']");
  }

  get btn_SortBy() {
    return $("button*=Sort by");
  }

  get btn_PriceLowestListItem() {
    return $("button*=Price (lowest first)");
  }

  get txt_Heading() {
    return $("h1*=properties found");
  }

  get btn_SelectedCheckinDate() {
    return $('button[data-testid="date-display-field-start"]');
  }

  get btn_SelectedCheckoutDate() {
    return $('button[data-testid="date-display-field-end"]');
  }

  get txt_Count() {
    return $$('div[class="e98c626f34"] span[class="e615eb5e43"]');
  }

  async selectLocation(location) {
    //click on location text field
    await this.tf_Location.click();
    await browser.pause(1000);

    //set the location value
    await this.tf_Location.setValue(location);
    await browser.pause(3000);

    //select the suggested first location
    await this.dd_Location[0].click();
    await browser.pause(3000);
  }

  async selectCheckinCheckout() {
    //select checkin time
    await this.btn_CheckinDate.click();

    //select checkout time
    await this.btn_CheckoutDate.waitForClickable({
      timeout: 2000,
      timeoutMsg: "checkout date is not clickable",
    });
    await this.btn_CheckoutDate.click();

    let cd = await this.getDates();
    return cd;
  }

  async selelctAdultChildCount() {
    //click on dropdown button
    await this.tf_AdultChildCount.click();
    //select adult count
    await this.btn_Minus[0].click();

    await expect(this.txt_Count[0]).toHaveText("1");
    await expect(this.txt_Count[1]).toHaveText("0");
    await expect(this.txt_Count[2]).toHaveText("1");

    //click done button
    await this.btn_Done.click();
  }

  async clickSearch() {
    //click serach button
    await this.btn_Search.click();
  }

  async verifyLocation(message) {
    //verify location
    await expect(this.txt_Heading).toHaveTextContaining(message);
  }

  async selectRating() {
    await this.chk_StarRate.scrollIntoView();
    //click star 5 rating
    await this.chk_StarRate.click();
  }

  async selectSortBypriceOption() {
    await this.btn_SortBy.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    //select price lowest option
    await this.btn_SortBy.click();
    await this.btn_PriceLowestListItem.click();
  }

  async getDates() {
    //get checkin date and checkout date
    let checkindate = await this.btn_SelectedCheckinDate.getText();
    let checkoutdate = await this.btn_SelectedCheckoutDate.getText();
    return { checkindate, checkoutdate };
  }
}

export default new SearchPage();
