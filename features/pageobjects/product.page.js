import { expect as Chaiexpect } from "chai";

class ProductPage {
  get lbl_SecondProductName() {
    return $$('h3[class="a4225678b2"] a div[data-testid="title"]');
  }

  get lbl_SecondProductPrice() {
    return $$(
      'div[class="e729ed5ab6 af8e3083b0"] span[class="fcab3ed991 fbd1d3018c e729ed5ab6"]'
    );
  }

  get lbl_ProductNamePd() {
    return $('h2[class="d2fee87262 pp-header__title"]');
  }

  get dd_RoomCount() {
    return $$('select[class="hprt-nos-select js-hprt-nos-select"]');
  }

  get btn_Reserve() {
    return $('button[data-tooltip-class="submit_holder_button_tooltip"]');
  }

  get lbl_HeadingLevel() {
    return $("h2*=Availability");
  }

  get lbl_TaxAmount() {
    return $$('div[data-testid="taxes-and-charges"]');
  }

  get lbl_Price(){
    return $$('span[class="prco-valign-middle-helper"]')
  }

  get lbl_Tax(){
    return $$('div[class="prd-taxes-and-fees-under-price prco-inline-block-maker-helper on-hpage blockuid-732588204_362186756_1_0_0"]')
  }

  async getProductDetails() {
    // get product name of Home page
    const productname = await this.lbl_SecondProductName[1].getText();
    console.log(productname);

    //get product price of Home page
    const productprice = await this.lbl_SecondProductPrice[0].getText();
    const taxamount = await this.getTaxamount();
    return { productname, productprice, taxamount };
  }

  async getTaxamount() {
    const extractedtax = await this.lbl_TaxAmount[1].getText();

    if (extractedtax !== "Includes taxes and charges") {
      const tax = await extractedtax.match(/\d+/g);
      console.log("tax" + tax);
      return tax;
    } 

    return extractedtax;
  }

  async selectSecondProduct() {
    await browser.pause(2000);
    const pd = await this.getProductDetails();

    //click on Product name and naviagte to product details page
    await this.lbl_SecondProductName[1].click();

    //switch to product details page
    await browser.pause(2000);
    await browser.switchWindow("booking.com/hotel");
    await browser.pause(2000);

    return pd;
  }

  async verifyProductDetails(productName) {
    //verify the product name in the product details page with the product list page
    await this.lbl_ProductNamePd.waitForExist({
      timeout: 10000,
      timeoutMsg: "product name is not visible",
    });
    const pdproductname = await this.lbl_ProductNamePd.getText();

    await Chaiexpect(productName).to.equal(pdproductname);
  }

  async selectRoomCount() {
    await browser.pause(6000);
    //scroll till view the selectbox
    await this.lbl_HeadingLevel.scrollIntoView();

    //select room count for the select box.
    await this.dd_RoomCount[0].selectByAttribute("value", "1");

    await browser.pause(1000);
    await this.btn_Reserve.click();
  }
}

export default new ProductPage();
