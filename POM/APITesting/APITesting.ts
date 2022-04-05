import { browser, element, by } from "protractor";
var Request = require("request");
describe("Errors in Protractor", function () {
    browser.ignoreSynchronization = true; // for non-angular websites
    xit("GetMethod", function (done) {

        Request.get({
            "headers": { "content-type": "application/json" },
            "url": "https://reqres.in/api/users?page=2"

        }, (error: any, response: any, body: any) => {
            if (error) {
                return console.dir(error);
            }
            console.dir("Body : ******");
            console.dir(JSON.parse(body))

            console.log(" Response Code ****:" + response.statusCode)
            // console.log(" Response Message ****:" + JSON.parse(body.page))
            expect(response.statusCode).toBe(200)
            // this below line took half day of research
            done();
        });
    });

    it("PostMethod", function (done) {

        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "https://reqres.in/api/users",
            "body": JSON.stringify({
                "name": "Rohith",
                "job": "AutomationTestEngineer"
            })
        }, async (error: any, response: any, body: any) => {
            if (error) {
                return console.dir(error);
            }
            console.dir("Body : ******");
            console.dir(JSON.parse(body));

            console.log(" Response Code ****:" + response.statusCode)
            // console.log(" Response Message ****:" + JSON.parse(body.page))
            expect(response.statusCode).toBe(201)

            // var res = await JSON.parse(response);
            // console.log(console.log("******************" + res[0].statusCode));
            // this below line took half day of research
            done();
        });
    });
})