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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uUE9NX2NvcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vQW1hem9uUE9NL0FtYXpvblBPTV9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQUNqRSx1RUFBOEQ7QUFFOUQsTUFBYSxjQUFlLFNBQVEsaUNBQVk7SUFBaEQ7O1FBRVksaUJBQVksR0FBRyw4QkFBOEIsQ0FBQztRQUM5QyxhQUFRLEdBQUcsZ0NBQWdDLENBQUM7UUFDNUMsb0JBQWUsR0FBRyxxRUFBcUUsQ0FBQztRQUN4RixtQkFBYyxHQUFHLCtFQUErRSxDQUFDO1FBQ2pHLGNBQVMsR0FBRyxrRkFBa0YsQ0FBQTtRQUM5RixxQkFBZ0IsR0FBRyx1R0FBdUcsQ0FBQTtRQUMxSCxpQkFBWSxHQUFHLHlDQUF5QyxDQUFDO1FBQ3pELHFCQUFnQixHQUFHLGdEQUFnRCxDQUFDO1FBQ3BFLGdCQUFXLEdBQUcsOEJBQThCLENBQUM7UUFDN0MsZ0JBQVcsR0FBRyxpQ0FBaUMsQ0FBQztRQUNoRCxnQkFBVyxHQUFHLCtCQUErQixDQUFDO0lBOEMxRCxDQUFDO0lBNUNnQixhQUFhLENBQUMsTUFBYzs7WUFDckMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxLQUFhOztZQUN0QyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUks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