import productPage from './product.page.js';
import { expect as Chaiexpect } from "chai";
import  chaiAsPromised from "chai-as-promised";

class OrderPage {
  get checkin() {
    return $("/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/time[1]/span[1]");
  }

  get checkout() {
    return $("/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/time[1]/span[1]");
  }

  get productTotal(){
    return $("//body[1]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/span[1]");
    
  }

  get firstNameInput(){
    return $('#firstname')

  }

  get lastNameInput(){
    return $('#lastname')
  }

  get emailAddressInput(){
    return $('#email')
  }
  get nextButton(){
    return $('button*= Next: Final details')
  }

  get accountDetails(){
    return $$('ul[class="bui-list bui-list--text personal-details-reassurance__details-container"] li div[class="bp-u-text-ellipsis bui-f-color-grayscale"]')
  } 

  get bookingLogo(){
    return $('aria/Booking.com online hotel reservations')
  }

  async verifyBooking(indate, outdate, total) {
    const checkinPd = await this.checkin.getText();

    //verify whether checkin date of home page matches checkin date order confirmation page
    console.log('checkin:' + indate + checkinPd)
    const ci = checkinPd.substring(0, checkinPd.lastIndexOf(" "))
    console.log('ci'+ ci)
    await expect(ci).toEqual(indate)


    const checkoutPd = await this.checkout.getText();
    //verify whether checkout date of home page matches checkout date order confirmation page
    console.log('checkout:' + outdate + checkoutPd)
    const co = checkoutPd.substring(0, checkoutPd.lastIndexOf(" "))
    console.log('co'+ co)
    // await chaiAsPromised(outdate).to.equal(co)
    await expect(co).toEqual(outdate)


    //verify the booking price
    const pdprice = await this.productTotal.getText()
    console.log('total price:' + total + pdprice)
    await expect(total).toEqual(pdprice)

  }

  async fillDetailsForm(firstname, lastname, emailaddress){
    let a = firstname
    let b = lastname
    let c= emailaddress
    // console.log(a + b + c)

    //fill out firstname, lastname, email
    await this.firstNameInput.setValue(firstname)
    await this.lastNameInput.setValue(lastname)
    await this.emailAddressInput.setValue(emailaddress)

    //click next button
    await this.nextButton.click()

    return {a, b, c}
  }

  async verifyFormDetails(fn, ln, em){
    //verify full name and email
    const fullname = fn+' '+ln;
    const fullname2 = await this.accountDetails[0].getText()
    const email2 = await this.accountDetails[1].getText()
    // console.log(fullname)
    await Chaiexpect(fullname).to.equal(fullname2);
    await Chaiexpect(em).to.equal(email2);

    //click on booking.com logo
    await this.bookingLogo.click();

  }
}

export default new OrderPage();