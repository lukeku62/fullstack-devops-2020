import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'

type testType = {
    input: string,
    expected: {inputCMYK: number[], outputHSL: number[]}
}

const testData: testType[] = [
    {input: '{"c":0, "m":0, "y":0, "k":100}', expected: {inputCMYK:[0,0,0,100], outputHSL:[0,0,0]}},
    {input: '{"c":100, "m":0, "y":0, "k":0}', expected: {inputCMYK:[100,0,0,0], outputHSL:[180,100,50]}},
    {input: '{"c":0, "m":100, "y":0, "k":0}', expected: {inputCMYK:[0,100,0,0], outputHSL:[300,100,50]}},
    {input: '{"c":0, "m":0, "y":100, "k":0}', expected: {inputCMYK:[0,0,100,0], outputHSL:[60,100,50]}},
    {input: '{"c":100, "m":100, "y":0, "k":0}', expected: {inputCMYK:[100,100,0,0], outputHSL:[240,100,50]}},
    {input: '{"c":0, "m":100, "y":100, "k":0}', expected: {inputCMYK:[0,100,100,0], outputHSL:[0,100,50]}},
    {input: '{"c":100, "m":0, "y":100, "k":0}', expected: {inputCMYK:[100,0,100,0], outputHSL:[120,100,50]}}
]

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('REST API test suite description', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    testData.forEach((test) => {
        it(`test case description`, (done) => {
            chai.request(url)
                .get('/')
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
