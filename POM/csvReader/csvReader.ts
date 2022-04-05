import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import console from "console";

describe("Read CSV", () => {
    it("Read CSV Value", async () => {
        let map = new Map();
        const csvFilePath = path.resolve(__dirname, './../../../InputFolder/agreement.csv');
        const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
        let arrayOfString = (fileContent.split(/\r?\n/))

        arrayOfString.forEach(async (value) => {
            let val = value.split(",");
            map.set(val[0], val[1]);
        })
        console.log(map);

    })
})