const supertest = require ("supertest");
const urls = require ('../config/urls');


const Challenges = {
    get: async(token)=>{
        const response = await supertest (urls.challenge)
        .get('/challenges')
        .set('Accept','application/json')
        .set('X-CHALLENGER', token);
        return response;
    }
    
};

module.exports = Challenges;

