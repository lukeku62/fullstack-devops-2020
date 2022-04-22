import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'

type testType = {
    input: string,
    expected: {inputHSL: number[], outputHEX: string}
}

const testData: testType[] = [
    {input: '{"h":0, "s":0, "l":0}', expected: {inputHSL:[0,0,0], outputHEX:'000000'}},
    {input: '{"h":0, "s":0, "l":50}', expected: {inputHSL:[0,0,50], outputHEX:'808080'}},
    {input: '{"h":0, "s":0, "l":100}', expected: {inputHSL:[0,0,100], outputHEX:'ffffff'}},
    {input: '{"h":0, "s":100, "l":50}', expected: {inputHSL:[0,100,50], outputHEX:'ff0000'}},
    {input: '{"h":0, "s":100, "l":100}', expected: {inputHSL:[0,100,100], outputHEX:'ffffff'}},
    {input: '{"h":60, "s":100, "l":50}', expected: {inputHSL:[60,100,50], outputHEX:'ffff00'}}
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
