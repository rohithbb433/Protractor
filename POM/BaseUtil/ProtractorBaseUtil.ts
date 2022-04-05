import { browser, element, by, ElementFinder, ProtractorExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";

export class BaseUtil {
    private expectedCondition: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeOut = 10000;

    public async expliciteWait(timeMS: number) {
        await browser.sleep(timeMS);
    }

    public async scrollToViewElement(element: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView()', await element.getWebElement())
    }

    public async mouseDoubleClick(element: ElementFinder) {
        await browser.wait(this.expectedCondition.elementToBeClickable(element), this.timeOut,
            "Failed to click the element");
        await browser.actions().doubleClick(await element.getWebElement()).perform();
    }

    public async mouseRightClick(element: ElementFinder) {
        await browser.wait(this.expectedCondition.elementToBeClickable(element), this.timeOut,
            "Failed to click the element");
        await browser.actions().mouseMove(await element.getWebElement()).perform();
        await browser.actions().click(await element.getWebElement(), protractor.Button.RIGHT).perform();

    }

    public async getText(element: ElementFinder): Promise<string> {
        await this.visibilityOf(element);
        return await element.getText();
    }

    public async getAttribute(element: ElementFinder, attribute: string): Promise<string> {
        await this.visibilityOf(element);
        return await element.getAttribute(attribute);
    }

    public async getPageTitle(): Promise<string> {
        return await browser.getTitle();
    }

    public async getPageURL(): Promise<string> {
        return await browser.getCurrentUrl();
    }

    public async dragAndDrop(source: ElementFinder, destination: ElementFinder) {
        await this.visibilityOf(source);
        await this.visibilityOf(destination);
        await browser.actions().
            dragAndDrop(await source.getWebElement(), await destination.getWebElement()).perform();
    }

    public async click(element: ElementFinder) {
        await browser.wait(this.expectedCondition.elementToBeClickable(element), this.timeOut,
            "Failed to click the element");
        await element.click();
    }

    public async type(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.sendKeys(testData);
    }


    public async clearAndType(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.clear()
        await element.sendKeys(testData);
    }

    public async assertText(element: ElementFinder, expectedText: string) {
        await this.visibilityOf(element);
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(expectedText);
    }

    private async visibilityOf(element: ElementFinder) {
        await browser.wait(this.expectedCondition.visibilityOf(element), this.timeOut,
            "Element is not visible");
    }

    protected async inVisibilityOf(element: ElementFinder) {
        await browser.wait(this.expectedCondition.invisibilityOf(element), this.timeOut,
            "Element is still visible");
    }
    public async assertTrue(element: ElementFinder) {
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(true);
    }

    public async assertFalse(element: ElementFinder) {
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(false);
    }

    public async acceptAlert() {
        await browser.wait(this.expectedCondition.alertIsPresent(), this.timeOut, "Alert is not present");
        await (await browser.switchTo().alert()).accept();
    }

    public async dismissAlert() {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).dismiss();
    }

    private async waitForAlert() {
        await browser.wait(this.expectedCondition.alertIsPresent(), this.timeOut, "Alert is not present");
    }

    public async tyepInAlert(data: string) {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(data);
    }
    public async getTextFromAlert(): Promise<string> {
        await this.waitForAlert();
        let alertText = await (await browser.switchTo().alert()).getText();
        return alertText;
    }

    public async switchToFrame(frameNumber: number) {
        await browser.switchTo().frame(frameNumber);
    }


    public async typeAndTab(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData, protractor.Key.TAB)
    }

    public async typeAndEnter(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData, protractor.Key.ENTER)

    }

    public async mouseHoverAndClick(element: ElementFinder) {
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .click()
            .perform();

    }
    public async moveToElement(element: ElementFinder) {
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .perform();
    }

    public async selectDropDown(locatotr: string, value: string) {
        await element(by.cssContainingText(locatotr, value)).clic();
    }

    public async uploadFile(element: ElementFinder, path: string) {
        await this.visibilityOf(element);
        //await element.clear();
        await element.sendKeys(path);
    }

}