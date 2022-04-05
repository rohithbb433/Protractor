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
const AmazonPOM_1 = require("../AmazonPOM/AmazonPOM");
const dataValue = __importStar(require("./../../dataValue.json"));
const amazonObject = new AmazonPOM_1.AmazonHomePage();
describe("AmazonBrowser Test", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.manage().timeouts().implicitlyWait(10000);
        yield protractor_1.browser.get(dataValue.URL);
        yield protractor_1.browser.manage().window().maximize();
    }));
    it("TestCase__001", () => __awaiter(void 0, void 0, void 0, function* () {
        yield amazonObject.clickOnHedaer(dataValue.Header);
        yield amazonObject.clickOnBrandElm(dataValue.CustemBrand);
        yield amazonObject.moverHoverOnElectronicsItem(dataValue.ElectronisItem);
        yield amazonObject.clickOnMobileBrand(dataValue.Brand);
        yield amazonObject.clickOnAnyMobile(dataValue.MobileName);
        yield amazonObject.clickOnquantityDropDownByValue(dataValue.DropDownValue);
        yield amazonObject.clickOnAddToCard();
        yield amazonObject.clickOnproceedToBuyCard();
        yield amazonObject.clickOninputMailID(dataValue.UserName);
        yield amazonObject.clickOnContinue();
        yield amazonObject.clickOnpassword(dataValue.Password);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vVGVzdENhc2UvVGVzdENhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCxzREFBd0Q7QUFDeEQsa0VBQW1EO0FBRW5ELE1BQU0sWUFBWSxHQUFtQixJQUFJLDBCQUFjLEVBQUUsQ0FBQztBQUUxRCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDakIsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBUyxFQUFFO1FBQzNCLE1BQU0sWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsTUFBTSxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxNQUFNLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekUsTUFBTSxZQUFZLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxNQUFNLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsTUFBTSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxNQUFNLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQzdDLE1BQU0sWUFBWSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxNQUFNLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9