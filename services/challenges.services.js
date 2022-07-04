const allure = require ("allure-mocha/dist/MochaAllureReporter");
const supertest = require ("supertest");
const urls = require ('../config/urls');


const Challenges = {
    get: async(token)=>{
        const response = await supertest (urls.challenge)
        .get('/challenges')
        .set('Accept','application/json')
        .set('X-CHALLENGER', token);
        allure.attachment('response', JSON.stringify(response.body), 'application/json');
        return response;
    }
    
};

module.exports = Challenges;

