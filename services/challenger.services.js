const supertest = require ("supertest");
const urls = require ('../config/urls');


const Challenger = {
    post: async()=>{
        const response = await supertest (urls.challenge)
        .post('/challenger')
        .set('Accept','application/json'); 
        return response;
    }
    
};

module.exports = Challenger;
