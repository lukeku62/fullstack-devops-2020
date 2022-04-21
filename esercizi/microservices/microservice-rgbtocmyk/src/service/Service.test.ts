import chai from "chai";
import { CMYK, RGB } from "color-convert/conversions";
import { convert } from "./Service";

chai.config.includeStack = true;
const should = chai.should();

describe("test suite description", () => {
  // testData.forEach((test) => {
  it(`test case description`, () => {
    
    const given: RGB = [255, 255, 255];

    const expected: CMYK = [0, 0, 0, 0];

    convert(given).should.deep.equal(expected);
  });
  // });
});
