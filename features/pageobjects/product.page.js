class ProductPage {
    

    get secondProductName(){
        return $("//div[contains(text(),'Hotel Suisse')]");
    }

    get secondProductPrice(){
        return $("//span[contains(text(),'US$81')]");
    }


    get productNamePd(){
        return $('.d2fee87262 pp-header__title');
    }

    get selectBox(){
        return $("//select[@id='hprt_nos_select_27132901_91140748_3_42_0']")
    }

    get reserveButton(){
        return $('#b_tt_holder_1')
    }


async selectSecondProduct(){
    //get product name of Home page
    const elem4 = await secondProductName;
    let productname = await elem4.getText();
    //get product price of Home page
    const elem5 = await secondProductPrice;
    let productprice = await elem5.getText();

    //click on Product name and naviagte to product details page
    await this.secondProductName.click()
    let l = browser.getWindowHandle()
    //switch to product details page
    await browser.switchToWindow(l)

    return productprice
     
}

async verifyProductDetails(){
    //verify the product name in the product details page with the product list page
    const elem6 = await secondProductName;
    let pdproductname = await elem6.getText();

    await expect(pdproductname).toHaveText(productname);

    }

   
    async selectRoomCount(){
        //scroll till view the selectbox
        const elem7 = await selectBox;
        await elem7.scrollIntoView();

        //select room count for the select box.
        await selectBox.selectByAttribute('value', '1');
        await this.reserveButton.click();

    }
}

export default new ProductPage();