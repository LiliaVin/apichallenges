const allure = require ("allure-mocha/dist/MochaAllureReporter");
const supertest = require ("supertest");
const urls = require ('../config/urls');
const loadApispec = require ('../lib/validator');
const validate = require ('../lib/validator');

const Challenges = {
    get: async(token)=>{
        const response = await supertest (urls.challenge)
        .get('/challenges')
        .set('Accept','application/json')
        .set('X-CHALLENGER', token);
        allure.attachment('response', JSON.stringify(response.body), 'application/json');

        const apiSpec = await loadApispec('https://apichallenges.herokuapp.com/docs/swagger');
        const schema = apiSpec.paths['/challenges'].get.responses[200];
        validate(schema, response.body);
        return response;
    }
    
};

module.exports = Challenges;

