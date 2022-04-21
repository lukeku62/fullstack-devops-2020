import chai from "chai";
import chaiHttp from "chai-http";
import * as config from "../../server-config.json";

type TestType = {
  input: string;
  expected: { inputRGB: number[]; outputCMYK: number[] };
};

const testData: TestType[] = [
  {
    input: '{"r":0, "g":0, "b":0}',
    expected: { inputRGB: [0, 0, 0], outputCMYK: [0, 0, 0, 100] },
  },
  {
    input: '{"r":255, "g":0, "b":0}',
    expected: { inputRGB: [255, 0, 0], outputCMYK: [0, 100, 100, 0] },
  },
  {
    input: '{"r":0, "g":255, "b":0}',
    expected: { inputRGB: [0, 255, 0], outputCMYK: [100, 0, 100, 0] },
  },
  {
    input: '{"r":0, "g":0, "b":255}',
    expected: { inputRGB: [0, 0, 255], outputCMYK: [100, 100, 0, 0] },
  },
  {
    input: '{"r":255, "g":255, "b":0}',
    expected: { inputRGB: [255, 255, 0], outputCMYK: [0, 0, 100, 0] },
  },
  {
    input: '{"r":0, "g":255, "b":255}',
    expected: { inputRGB: [0, 255, 255], outputCMYK: [100, 0, 0, 0] },
  },
];

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe("REST API test suite description", () => {
  const url =
    process.env.npm_config_rgb2hex_test_url ||
    `http://localhost:${config.port}`;
  console.log("Test URL: " + url);

  testData.forEach((test) => {
    it(`test case description`, (done) => {
      chai
        .request(url)
        .get("/")
        .query(`color=${test.input}`)
        .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(200);
          res.body.should.deep.equal(test.expected);
          done();
        });
    });
  });
});
