import { browser, element, by } from "protractor";
import { BaseUtil } from "./ProtractorBaseUtil";

export class ApplSpecific extends BaseUtil {

    public async SwitchTheHandling() {
        let parentWindowID = await browser.getWindowHandle();
        let allWindowID = await browser.getAllWindowHandles();
        allWindowID.forEach(async (ID) => {
            if (ID !== parentWindowID) {
                await browser.switchTo().window(ID);
            }
        })
    }

    public async findTheElement(elm: string) {
        let value = elm.trim().split("~");
        if (value[0] === "xpath") {
            return element(by.xpath(value[1]));
        } else if (value[0] === "css") {
            return element(by.css(value[1]));
        }

    }
}