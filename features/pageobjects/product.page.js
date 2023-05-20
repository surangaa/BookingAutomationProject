import { expect as Chaiexpect} from "chai";

class ProductPage {
  get secondProductName() {
    return $$('h3[class="a4225678b2"] a div[data-testid="title"]');
  }

  get secondProductPrice() {
    return $$(
      'div[class="e729ed5ab6 af8e3083b0"] span[class="fcab3ed991 fbd1d3018c e729ed5ab6"]'
    );
  }

  get productNamePd() {
    return $('h2[class="d2fee87262 pp-header__title"]');
  }

  get selectBox() {
    return $$('select[class="hprt-nos-select js-hprt-nos-select"]');
  }

  get reserveButton() {
    return $("//button[@id='b_tt_holder_1']");
  }

  get headingLevel(){
    return $('h2*=Availability')
  }

  //   let storedProductName;

  async getProductDetails() {
    // get product name of Home page
    const productname = await this.secondProductName[1].getText();
    console.log(productname);

    //get product price of Home page
    const productprice = await this.secondProductPrice[0].getText();
    console.log(productprice);

    return { productname, productprice };
  }

  async selectSecondProduct() {
    await browser.pause(2000);
    const pd = await this.getProductDetails();
    //click on Product name and naviagte to product details page
    await this.secondProductName[1].click();
    //switch to product details page
    await browser.pause(2000);
    await browser.switchWindow("booking.com/hotel");
    await browser.pause(2000);

    return pd;
  }

  async verifyProductDetails(productName) {
    //verify the product name in the product details page with the product list page
    await this.productNamePd.waitForExist({ timeout: 10000 });
    const pdproductname = await this.productNamePd.getText();
    // console.log("productname in pd page" + pdproductname);
    // console.log("productname" + productName);
    
    await Chaiexpect(productName).to.equal(pdproductname)

  }

  async selectRoomCount() {
    await browser.pause(6000)
//scroll till view the selectbox
    // if (this.headingLevel.isDisplayedInViewport()) {
    //   await this.headingLevel.scrollIntoView();
    // } else {
    //   console.error("Element is not visible");
    // }

    await this.headingLevel.scrollIntoView();

    
    //select room count for the select box.
    await this.selectBox[0].selectByAttribute("value", "1");
    await this.reserveButton.click();
  }
}

export default new ProductPage();
