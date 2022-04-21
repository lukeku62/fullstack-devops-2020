import chai from "chai";
import { convert } from "./Service";

chai.config.includeStack = true;
// const should = chai.should();

describe("test suite description", () => {
  // testData.forEach((test) => {
  it(`test case description`, () => {
    const given = "#ffffff";
    const expected = [255, 255, 255];

    convert(given).should.deep.equal(expected);
  });
  // });
});
