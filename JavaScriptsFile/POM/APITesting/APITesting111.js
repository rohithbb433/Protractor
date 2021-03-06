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
const protractor_1 = require("protractor");
var Request = require("request");
describe("Errors in Protractor", function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    xit("GetMethod", function (done) {
        Request.get({
            "headers": `{ "content-type": "application/json" }`,
            "url": `https://reqres.in/api/users?page=2`
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir("Body : ******");
            console.dir(JSON.parse(body));
            console.log(" Response Code ****:" + response.statusCode);
            // console.log(" Response Message ****:" + JSON.parse(body.page))
            expect(response.statusCode).toBe(200);
            // this below line took half day of research
            done();
        });
    });
    it("PostMethod", function (done) {
        Request.post({
            "headers": `{ "content-type": "application/json" }`,
            "url": "https://reqres.in/api/users",
            "body": JSON.stringify(`{
                "name": "Rohith",
                "job": "AutomationTestEngineer"
            }`)
        }, (error, response, body) => __awaiter(this, void 0, void 0, function* () {
            if (error) {
                return console.dir(error);
            }
            console.dir("Body : ******");
            console.dir(JSON.parse(body));
            console.log(" Response Code ****:" + response.statusCode);
            // console.log(" Response Message ****:" + JSON.parse(body.page))
            expect(response.statusCode).toBe(201);
            // var res = await JSON.parse(response);
            // console.log(console.log("******************" + res[0].statusCode));
            // this below line took half day of research
            done();
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJVGVzdGluZzExMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1BPTS9BUElUZXN0aW5nL0FQSVRlc3RpbmcxMTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFFbEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtJQUM3QixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUNqRSxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsSUFBSTtRQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1IsU0FBUyxFQUFFLHdDQUF3QztZQUNuRCxLQUFLLEVBQUUsb0NBQW9DO1NBRTlDLEVBQUUsQ0FBQyxLQUFVLEVBQUUsUUFBYSxFQUFFLElBQVMsRUFBRSxFQUFFO1lBQ3hDLElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDekQsaUVBQWlFO1lBQ2pFLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JDLDRDQUE0QztZQUM1QyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsSUFBSTtRQUUzQixPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ1QsU0FBUyxFQUFFLHdDQUF3QztZQUNuRCxLQUFLLEVBQUUsNkJBQTZCO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzs7Y0FHckIsQ0FBQztTQUNOLEVBQUUsQ0FBTyxLQUFVLEVBQUUsUUFBYSxFQUFFLElBQVMsRUFBRSxFQUFFO1lBQzlDLElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDekQsaUVBQWlFO1lBQ2pFLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRXJDLHdDQUF3QztZQUN4QyxzRUFBc0U7WUFDdEUsNENBQTRDO1lBQzVDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUEifQ==