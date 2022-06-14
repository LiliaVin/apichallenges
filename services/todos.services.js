const supertest = require ("supertest");
const urls = require ('../config/urls');


const Todos = {
    get: async(token)=>{
        const response = await supertest (urls.challenge)
        .get('/todos')
        .set('Accept','application/json')
        .set('X-CHALLENGER', token);
        return response;
    },

    head: async(token)=>{
        const response = await supertest (urls.challenge)
        .head('/todos')
        .set('X-CHALLENGER', token);
        return response;
    },
    post: async(token)=>{
        const response = await supertest (urls.challenge)
        .post('/todos')
        .send({"title": "create todo process payroll", "doneStatus": true,"description": ""})
        return response;
    },
    get: async(token)=>{
        const response = await supertest (urls.challenge)
        .get('/todos')
        .set('Accept','application/xml')
        .set('X-CHALLENGER', token);
        return response;
    },
    get: async(token)=>{
        const response = await supertest (urls.challenge)
        .get('/todos?doneStatus=true')
        .set('Accept','application/json')
        .set('X-CHALLENGER', token);
        return response;
    },
};

module.exports = Todos;