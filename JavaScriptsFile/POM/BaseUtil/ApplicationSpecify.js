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
exports.ApplSpecific = void 0;
const protractor_1 = require("protractor");
const ProtractorBaseUtil_1 = require("./ProtractorBaseUtil");
class ApplSpecific extends ProtractorBaseUtil_1.BaseUtil {
    SwitchTheHandling() {
        return __awaiter(this, void 0, void 0, function* () {
            let parentWindowID = yield protractor_1.browser.getWindowHandle();
            let allWindowID = yield protractor_1.browser.getAllWindowHandles();
            allWindowID.forEach((ID) => __awaiter(this, void 0, void 0, function* () {
                if (ID !== parentWindowID) {
                    yield protractor_1.browser.switchTo().window(ID);
                }
            }));
        });
    }
    findTheElement(elm) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = elm.trim().split("~");
            if (value[0] === "xpath") {
                return (0, protractor_1.element)(protractor_1.by.xpath(value[1]));
            }
            else if (value[0] === "css") {
                return (0, protractor_1.element)(protractor_1.by.css(value[1]));
            }
        });
    }
}
exports.ApplSpecific = ApplSpecific;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGljYXRpb25TcGVjaWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUE9NL0Jhc2VVdGlsL0FwcGxpY2F0aW9uU3BlY2lmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsNkRBQWdEO0FBRWhELE1BQWEsWUFBYSxTQUFRLDZCQUFRO0lBRXpCLGlCQUFpQjs7WUFDMUIsSUFBSSxjQUFjLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JELElBQUksV0FBVyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3RELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBTyxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxFQUFFLEtBQUssY0FBYyxFQUFFO29CQUN2QixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QztZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFFWSxjQUFjLENBQUMsR0FBVzs7WUFDbkMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QztpQkFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLE9BQU8sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztRQUVMLENBQUM7S0FBQTtDQUNKO0FBckJELG9DQXFCQyJ9