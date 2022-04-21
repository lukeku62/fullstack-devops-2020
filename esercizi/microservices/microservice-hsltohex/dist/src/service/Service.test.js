"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const Service_1 = require("./Service");
chai_1.default.config.includeStack = true;
const should = chai_1.default.should();
describe("test suite description", () => {
    // testData.forEach((test) => {
    it(`test case description`, () => {
        const given = [0, 0, 100];
        const expected = "FFFFFF";
        (0, Service_1.convert)(given).should.deep.equal(expected);
    });
    // });
});
//# sourceMappingURL=Service.test.js.map