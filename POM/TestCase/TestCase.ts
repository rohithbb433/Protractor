import { browser, by, element } from "protractor";
import { AmazonHomePage } from "../AmazonPOM/AmazonPOM";
import * as dataValue from "./../../dataValue.json"

const amazonObject: AmazonHomePage = new AmazonHomePage();

describe("AmazonBrowser Test", () => {
    beforeAll(async () => {
        browser.ignoreSynchronization = true;
        await browser.manage().timeouts().implicitlyWait(10000);
        await browser.get(dataValue.URL);
        await browser.manage().window().maximize();
    })
    it("TestCase__001", async () => {
        await amazonObject.clickOnHedaer(dataValue.Header);
        await amazonObject.clickOnBrandElm(dataValue.CustemBrand);
        await amazonObject.moverHoverOnElectronicsItem(dataValue.ElectronisItem);
        await amazonObject.clickOnMobileBrand(dataValue.Brand);
        await amazonObject.clickOnAnyMobile(dataValue.MobileName);
        await amazonObject.clickOnquantityDropDownByValue(dataValue.DropDownValue);
        await amazonObject.clickOnAddToCard();
        await amazonObject.clickOnproceedToBuyCard();
        await amazonObject.clickOninputMailID(dataValue.UserName);
        await amazonObject.clickOnContinue();
        await amazonObject.clickOnpassword(dataValue.Password);
    })
})