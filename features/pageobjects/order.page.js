import { expect as Chaiexpect } from "chai";

class OrderPage {
  get lbl_Dates() {
    return $$('time span[class="bui-date__title"]');
  }

  get lbl_ProductTotal() {
    return $(
      'div[class="bp-price-details__total-price e2e-price-details__total-charge--user"] span'
    );
  }

  get tf_FirstName() {
    return $("#firstname");
  }

  get tf_LastName() {
    return $("#lastname");
  }

  get tf_EmailAddress() {
    return $("#email");
  }
  get btn_Next() {
    return $("button*= Next: Final details");
  }

  get lbl_AccountDetails() {
    return $$('div[class="bp-u-text-ellipsis bui-f-color-grayscale"]');
  }

  get lnk_BookingLogo() {
    return $("aria/Booking.com online hotel reservations");
  }

  get dd_Country() {
    return $$('span[class="f9afbb0024 e733f1c8d1"]');
  }

  async verifyBooking(indate, outdate, total) {
    const checkinPd = await this.lbl_Dates[0].getText();

    //verify whether checkin date of home page matches checkin date order confirmation page
    // console.log('checkin:' + indate + checkinPd)
    const ci = checkinPd.substring(0, checkinPd.lastIndexOf(" "));
    // console.log('ci'+ ci)
    await expect(ci).toEqual(indate);

    const checkoutPd = await this.lbl_Dates[1].getText();
    //verify whether checkout date of home page matches checkout date order confirmation page
    // console.log('checkout:' + outdate + checkoutPd)
    const co = checkoutPd.substring(0, checkoutPd.lastIndexOf(" "));
    // console.log('co'+ co)
    await expect(co).toEqual(outdate);

    //verify the booking price
    const pdprice = await this.lbl_ProductTotal.getText();
    // console.log('total price:' + total + pdprice)
    await expect(Math.round(total)).toEqual(Math.round(pdprice));
  }

  async fillDetailsForm(firstname, lastname, emailaddress) {
    let a = firstname;
    let b = lastname;
    let c = emailaddress;
    // console.log(a + b + c)

    //fill out firstname, lastname, email
    await this.tf_FirstName.setValue(firstname);

    await this.tf_LastName.setValue(lastname);

    await this.tf_EmailAddress.setValue(emailaddress);

    browser.pause(60000);
    //click next button
    await this.btn_Next.click();

    return { a, b, c };
  }

  async verifyFormDetails(fn, ln, em) {
    browser.pause(5000);
    //verify full name and email
    const fullname = fn + " " + ln;
    const fullname2 = await this.lbl_AccountDetails[0].getText();
    const email2 = await this.lbl_AccountDetails[1].getText();
    // console.log(fullname)
    await Chaiexpect(fullname).to.equal(fullname2);
    await Chaiexpect(em).to.equal(email2);

    //click on booking.com logo
    await this.lnk_BookingLogo.click();
  }
}

export default new OrderPage();
