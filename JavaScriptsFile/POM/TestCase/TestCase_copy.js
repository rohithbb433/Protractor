"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const protractor_1 = require("protractor");
const AmazonPOM_copy_1 = require("../AmazonPOM/AmazonPOM_copy");
const dataValue = __importStar(require("./../../dataValue.json"));
const amazonObject = new AmazonPOM_copy_1.AmazonHomePage();
describe("AmazonBrowser Test", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.manage().timeouts().implicitlyWait(10000);
        yield protractor_1.browser.get(dataValue.URL);
        yield protractor_1.browser.manage().window().maximize();
    }));
    it("TestCase__001", () => __awaiter(void 0, void 0, void 0, function* () {
        yield amazonObject.clickOnHedaer("Mobiles");
        yield amazonObject.clickOnBrandElm("MI");
        yield amazonObject.moverHoverOnElectronicsItem("Mobiles & Accessories");
        yield amazonObject.clickOnMobileBrand("LG");
        yield amazonObject.clickOnAnyMobile("(Renewed) LG V40 ThinQ (Grey, 6GB RAM, 128GB Storage)");
        yield amazonObject.clickOnquantityDropDownByValue("3");
        yield amazonObject.clickOnAddToCard();
        yield amazonObject.clickOnproceedToBuyCard();
        yield amazonObject.clickOninputMailID(dataValue.UserName);
        yield amazonObject.clickOnContinue();
        yield amazonObject.clickOnpassword(dataValue.Password);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENhc2VfY29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9UZXN0Q2FzZS9UZXN0Q2FzZV9jb3B5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsZ0VBQTZEO0FBQzdELGtFQUFtRDtBQUVuRCxNQUFNLFlBQVksR0FBbUIsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFFMUQsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNoQyxTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9DLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsZUFBZSxFQUFFLEdBQVMsRUFBRTtRQUMzQixNQUFNLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsTUFBTSxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sWUFBWSxDQUFDLDJCQUEyQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDeEUsTUFBTSxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUM3RixNQUFNLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sWUFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDN0MsTUFBTSxZQUFZLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELE1BQU0sWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=