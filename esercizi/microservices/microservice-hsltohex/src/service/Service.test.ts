import chai from "chai";
import { HEX, HSL } from "color-convert/conversions";
import { convert } from "./Service";

chai.config.includeStack = true;
const should = chai.should();

describe("test suite description", () => {
  // testData.forEach((test) => {
  it(`test case description`, () => {
    const given: HSL = [0, 0, 100];

    const expected: HEX = "FFFFFF";

    convert(given).should.deep.equal(expected);
  });
  // });
});
