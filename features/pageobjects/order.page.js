import productPage from './product.page.js';
import SearchPage from './search.page.js';

class OrderPage {
  get checkin() {
    return $("/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/time[1]/span[1]");
  }

  get checkout() {
    return $("/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/aside[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/time[1]/span[1]");
  }

  get productTotal(){
    return $('span[data-animate-price-group-name="bp_user_total_price"]');
    
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

  get nameText(){
    return $("/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/main[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/div[2]")
  } 

  get emailText(){
    return $("/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/main[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[2]")

  }

  get bookingLogo(){
    return $('aria/Booking.com online hotel reservations')
  }

  async verifyBooking() {
    const elem10 = await this.checkin;
    let checkinPd = await elem10.getText();

    var v = SearchPage.verifyCheckinDates;

    //verify whether checkin date of home page matches checkin date order confirmation page
    await expect(v).toHaveText(checkinPd);

    const elem11 = await this.checkout;
    let checkoutPd = await elem11.getText();

    //verify whether checkout date of home page matches checkout date order confirmation page

    var w = SearchPage.verifyCheckinDates;
    await expect(w).toHaveText(checkoutPd);

    //verify the booking price
    var z = productPage.secondProductPrice.getText;
    await expect(z).toHaveText(this.productTotal.getText());
  }

  async fillDetailsForm(firstname, lastname, emailaddress){
    //fill out firstname, lastname, email
    var a = await this.firstNameInput.setValue(firstname)
    var b = await this.lastNameInput.setValue(lastname)
    var c = await this.emailAddressInput.setValue(emailaddress)

    //click next button
    await this.nextButton.click()

    return a, b, c
  }

  async verifyFormDetails(){
    //verify full name and email
    await expect(a+ ' ' +b).toHaveText(this.nameText.getText());
    await expect(c).toHaveText(this.emailText.getText());

    //click on booking.com logo
    await bookingLogo.click();

  }
}

export default new OrderPage();