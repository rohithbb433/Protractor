"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmazonHomePage = void 0;
const protractor_1 = require("protractor");
const ApplicationSpecify_1 = require("../BaseUtil/ApplicationSpecify");
class AmazonHomePage extends ApplicationSpecify_1.ApplSpecific {
    constructor() {
        super(...arguments);
        this.mobileHeader = `xpath~//a[text()='$HEADER$']`;
        this.BrandElm = `xpath~//span[text()='$BRAND$']`;
        this.electronicsItem = `xpath~//span[@class ='nav-a-content' and contains(text(),'$ITEM$')]`;
        this.MobileBrandElm = `xpath~//h3[text()='Mobile brands']/parent::div//li//a[text()='$MOBILEBRAND$']`;
        this.anyMobile = `xpath~//span[contains(text(),'$ANYMOBILE$') and contains(@class,'text-normal') ]`;
        this.quantityDropDown = `xpath~//label[text()='Quantity:']/parent::*//select[@id='quantity']//option[@value='$DROPDOWNVALUE$']`;
        this.addToCardElm = `xpath~//input[@id='add-to-cart-button']`;
        this.proceedToBuyCard = `xpath~//input[@name='proceedToRetailCheckout']`;
        this.inputMailID = `xpath~//input[@type='email']`;
        this.passwordElm = `xpath~//input[@type='password']`;
        this.continueElm = `xpath~//input[@id='continue']`;
    }
    clickOnHedaer(header) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(yield this.findTheElement(this.mobileHeader.replace("$HEADER$", header)));
        });
    }
    clickOnBrandElm(brand) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scrollToViewElement(yield this.findTheElement(this.BrandElm.replace("$BRAND$", brand)));
            yield this.click(yield this.findTheElement(this.BrandElm.replace("$BRAND$", brand)));
        });
    }
    moverHoverOnElectronicsItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.moveToElement(yield this.findTheElement(this.electronicsItem.replace("$ITEM$", item)));
        });
    }
    clickOnMobileBrand(mobileBrand) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(yield this.findTheElement(this.MobileBrandElm.replace("$MOBILEBRAND$", mobileBrand)));
        });
    }
    clickOnAnyMobile(mobileName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scrollToViewElement(yield this.findTheElement(this.anyMobile.replace("$ANYMOBILE$", mobileName)));
            yield this.click(yield this.findTheElement(this.anyMobile.replace("$ANYMOBILE$", mobileName)));
            yield this.SwitchTheHandling();
        });
    }
    clickOnquantityDropDownByValue(dropdownValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(3000);
            yield this.click(yield this.findTheElement(this.quantityDropDown.replace("$DROPDOWNVALUE$", dropdownValue)));
        });
    }
    clickOnAddToCard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(yield this.findTheElement(this.addToCardElm));
        });
    }
    clickOnproceedToBuyCard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(yield this.findTheElement(this.proceedToBuyCard));
        });
    }
    clickOninputMailID(username) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(yield this.findTheElement(this.inputMailID), username);
        });
    }
    clickOnContinue() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(yield this.findTheElement(this.continueElm));
        });
    }
    clickOnpassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(yield this.findTheElement(this.passwordElm), password);
        });
    }
}
exports.AmazonHomePage = AmazonHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uUE9NLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL0FtYXpvblBPTS9BbWF6b25QT00udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBQ2pFLHVFQUE4RDtBQUU5RCxNQUFhLGNBQWUsU0FBUSxpQ0FBWTtJQUFoRDs7UUFFWSxpQkFBWSxHQUFHLDhCQUE4QixDQUFDO1FBQzlDLGFBQVEsR0FBRyxnQ0FBZ0MsQ0FBQztRQUM1QyxvQkFBZSxHQUFHLHFFQUFxRSxDQUFDO1FBQ3hGLG1CQUFjLEdBQUcsK0VBQStFLENBQUM7UUFDakcsY0FBUyxHQUFHLGtGQUFrRixDQUFBO1FBQzlGLHFCQUFnQixHQUFHLHVHQUF1RyxDQUFBO1FBQzFILGlCQUFZLEdBQUcseUNBQXlDLENBQUM7UUFDekQscUJBQWdCLEdBQUcsZ0RBQWdELENBQUM7UUFDcEUsZ0JBQVcsR0FBRyw4QkFBOEIsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLGlDQUFpQyxDQUFDO1FBQ2hELGdCQUFXLEdBQUcsK0JBQStCLENBQUM7SUE4QzFELENBQUM7SUE1Q2dCLGFBQWEsQ0FBQyxNQUFjOztZQUNyQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLEtBQWE7O1lBQ3RDLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25HLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEs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