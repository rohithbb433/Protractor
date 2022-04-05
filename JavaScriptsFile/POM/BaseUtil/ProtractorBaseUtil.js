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
exports.BaseUtil = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class BaseUtil {
    constructor() {
        this.expectedCondition = protractor_1.browser.ExpectedConditions;
        this.timeOut = 10000;
    }
    expliciteWait(timeMS) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(timeMS);
        });
    }
    scrollToViewElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('arguments[0].scrollIntoView()', yield element.getWebElement());
        });
    }
    mouseDoubleClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.elementToBeClickable(element), this.timeOut, "Failed to click the element");
            yield protractor_1.browser.actions().doubleClick(yield element.getWebElement()).perform();
        });
    }
    mouseRightClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.elementToBeClickable(element), this.timeOut, "Failed to click the element");
            yield protractor_1.browser.actions().mouseMove(yield element.getWebElement()).perform();
            yield protractor_1.browser.actions().click(yield element.getWebElement(), ptor_1.protractor.Button.RIGHT).perform();
        });
    }
    getText(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            return yield element.getText();
        });
    }
    getAttribute(element, attribute) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            return yield element.getAttribute(attribute);
        });
    }
    getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    getPageURL() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getCurrentUrl();
        });
    }
    dragAndDrop(source, destination) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(source);
            yield this.visibilityOf(destination);
            yield protractor_1.browser.actions().
                dragAndDrop(yield source.getWebElement(), yield destination.getWebElement()).perform();
        });
    }
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.elementToBeClickable(element), this.timeOut, "Failed to click the element");
            yield element.click();
        });
    }
    type(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.sendKeys(testData);
        });
    }
    clearAndType(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData);
        });
    }
    assertText(element, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            let actualText = yield element.getText();
            expect(actualText.trim()).toBe(expectedText);
        });
    }
    visibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.visibilityOf(element), this.timeOut, "Element is not visible");
        });
    }
    inVisibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.invisibilityOf(element), this.timeOut, "Element is still visible");
        });
    }
    assertTrue(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            expect(yield element.isDisplayed()).toBe(true);
        });
    }
    assertFalse(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            expect(yield element.isDisplayed()).toBe(false);
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.alertIsPresent(), this.timeOut, "Alert is not present");
            yield (yield protractor_1.browser.switchTo().alert()).accept();
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).dismiss();
        });
    }
    waitForAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.expectedCondition.alertIsPresent(), this.timeOut, "Alert is not present");
        });
    }
    tyepInAlert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).sendKeys(data);
        });
    }
    getTextFromAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            let alertText = yield (yield protractor_1.browser.switchTo().alert()).getText();
            return alertText;
        });
    }
    switchToFrame(frameNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(frameNumber);
        });
    }
    typeAndTab(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData, ptor_1.protractor.Key.TAB);
        });
    }
    typeAndEnter(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData, ptor_1.protractor.Key.ENTER);
        });
    }
    mouseHoverAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions()
                .mouseMove(yield element.getWebElement())
                .click()
                .perform();
        });
    }
    moveToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions()
                .mouseMove(yield element.getWebElement())
                .perform();
        });
    }
    selectDropDown(locatotr, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, protractor_1.element)(protractor_1.by.cssContainingText(locatotr, value)).clic();
        });
    }
    uploadFile(element, path) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            //await element.clear();
            yield element.sendKeys(path);
        });
    }
}
exports.BaseUtil = BaseUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckJhc2VVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL0Jhc2VVdGlsL1Byb3RyYWN0b3JCYXNlVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0Y7QUFDL0YsZ0RBQW1EO0FBRW5ELE1BQWEsUUFBUTtJQUFyQjtRQUNZLHNCQUFpQixHQUFpQyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQzdFLFlBQU8sR0FBRyxLQUFLLENBQUM7SUE2SjVCLENBQUM7SUEzSmdCLGFBQWEsQ0FBQyxNQUFjOztZQUNyQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVZLG1CQUFtQixDQUFDLE9BQXNCOztZQUNuRCxNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLCtCQUErQixFQUFFLE1BQU0sT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDL0YsQ0FBQztLQUFBO0lBRVksZ0JBQWdCLENBQUMsT0FBc0I7O1lBQ2hELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ2pGLDZCQUE2QixDQUFDLENBQUM7WUFDbkMsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pGLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxPQUFzQjs7WUFDL0MsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDakYsNkJBQTZCLENBQUMsQ0FBQztZQUNuQyxNQUFNLG9CQUFPLENB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