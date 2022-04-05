import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import { Workbook, Row, Cell } from 'exceljs';

let map: Map<string, string> = new Map();
let firstName: string;
let lastName: string;
describe("Xlxs_value", () => {


    it("Reading Xlxs Value_Test", async () => {
        let workbook = new Workbook();
        let file = await workbook.xlsx.readFile("./../InputFolder/file_example.xlsx");
        let sheet = file.getWorksheet("Sheet1");
        let rowNumber: number

        let arrayOfRow = sheet.getRows(1, sheet.rowCount);

        for (let value of arrayOfRow) {
            if ("6" === (value.getCell(1)).toString()) {
                rowNumber = value.number
                break;
            }
        }

        let cellValue = sheet.getRow(rowNumber);
        cellValue.eachCell(async (cellVal, number) => {
            map.set(sheet.getRow(1).getCell(number).toString(), cellVal.toString());
        })
        console.log(map);
    })

})