import { element, by, ElementFinder, browser } from "protractor";
import { ApplSpecific } from "../BaseUtil/ApplicationSpecify";

export class AmazonHomePage extends ApplSpecific {

    private mobileHeader = `xpath~//a[text()='$HEADER$']`;
    private BrandElm = `xpath~//span[text()='$BRAND$']`;
    private electronicsItem = `xpath~//span[@class ='nav-a-content' and contains(text(),'$ITEM$')]`;
    private MobileBrandElm = `xpath~//h3[text()='Mobile brands']/parent::div//li//a[text()='$MOBILEBRAND$']`;
    private anyMobile = `xpath~//span[contains(text(),'$ANYMOBILE$') and contains(@class,'text-normal') ]`
    private quantityDropDown = `xpath~//label[text()='Quantity:']/parent::*//select[@id='quantity']//option[@value='$DROPDOWNVALUE$']`
    private addToCardElm = `xpath~//input[@id='add-to-cart-button']`;
    private proceedToBuyCard = `xpath~//input[@name='proceedToRetailCheckout']`;
    private inputMailID = `xpath~//input[@type='email']`;
    private passwordElm = `xpath~//input[@type='password']`;
    private continueElm = `xpath~//input[@id='continue']`;

    public async clickOnHedaer(header: string) {
        await this.click(await this.findTheElement(this.mobileHeader.replace("$HEADER$", header)));
    }

    public async clickOnBrandElm(brand: string) {
        await this.scrollToViewElement(await this.findTheElement(this.BrandElm.replace("$BRAND$", brand)));
        await this.click(await this.findTheElement(this.BrandElm.replace("$BRAND$", brand)));
    }
    public async moverHoverOnElectronicsItem(item: string) {
        await this.moveToElement(await this.findTheElement(this.electronicsItem.replace("$ITEM$", item)));
    }

    public async clickOnMobileBrand(mobileBrand: string) {
        await this.click(await this.findTheElement(this.MobileBrandElm.replace("$MOBILEBRAND$", mobileBrand)));
    }

    public async clickOnAnyMobile(mobileName: string) {
        await this.scrollToViewElement(await this.findTheElement(this.anyMobile.replace("$ANYMOBILE$", mobileName)));
        await this.click(await this.findTheElement(this.anyMobile.replace("$ANYMOBILE$", mobileName)));
        await this.SwitchTheHandling();
    }

    public async clickOnquantityDropDownByValue(dropdownValue: string) {
        await browser.sleep(3000);
        await this.click(await this.findTheElement(this.quantityDropDown.replace("$DROPDOWNVALUE$", dropdownValue)));
    }

    public async clickOnAddToCard() {
        await this.click(await this.findTheElement(this.addToCardElm));
    }
    public async clickOnproceedToBuyCard() {
        await this.click(await this.findTheElement(this.proceedToBuyCard));
    }
    public async clickOninputMailID(username: string) {
        await this.clearAndType(await this.findTheElement(this.inputMailID), username)
    }

    public async clickOnContinue() {
        await this.click(await this.findTheElement(this.continueElm));
    }
    public async clickOnpassword(password: string) {
        await this.clearAndType(await this.findTheElement(this.passwordElm), password);
    }

}