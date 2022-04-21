import chai from "chai";
import { CMYK, HSL } from "color-convert/conversions";
import { convert } from "./Service";

chai.config.includeStack = true;
const should = chai.should();

describe("test suite description", () => {
  // testData.forEach((test) => {
  it(`test case description`, () => {
    const given: CMYK = [0, 0, 0, 0];
    const expected: HSL = [0, 0, 100];

    convert(given).should.deep.equal(expected);
  });
  // });
});
