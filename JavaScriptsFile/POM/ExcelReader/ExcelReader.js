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
const exceljs_1 = require("exceljs");
let map = new Map();
let firstName;
let lastName;
describe("Xlxs_value", () => {
    it("Reading Xlxs Value_Test", () => __awaiter(void 0, void 0, void 0, function* () {
        let workbook = new exceljs_1.Workbook();
        let file = yield workbook.xlsx.readFile("./../InputFolder/file_example.xlsx");
        let sheet = file.getWorksheet("Sheet1");
        let rowNumber;
        let arrayOfRow = sheet.getRows(1, sheet.rowCount);
        for (let value of arrayOfRow) {
            if ("6" === (value.getCell(1)).toString()) {
                rowNumber = value.number;
                break;
            }
        }
        let cellValue = sheet.getRow(rowNumber);
        cellValue.eachCell((cellVal, number) => __awaiter(void 0, void 0, void 0, function* () {
            map.set(sheet.getRow(1).getCell(number).toString(), cellVal.toString());
        }));
        console.log(map);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxSZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9QT00vRXhjZWxSZWFkZXIvRXhjZWxSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBOEM7QUFHOUMsSUFBSSxHQUFHLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7QUFDekMsSUFBSSxTQUFpQixDQUFDO0FBQ3RCLElBQUksUUFBZ0IsQ0FBQztBQUNyQixRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUd4QixFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO1FBQ3JDLElBQUksUUFBUSxHQUFHLElBQUksa0JBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUM5RSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksU0FBaUIsQ0FBQTtRQUVyQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsS0FBSyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7WUFDMUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3ZDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO2dCQUN4QixNQUFNO2FBQ1Q7U0FDSjtRQUVELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9