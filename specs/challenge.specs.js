
const { assert } = require("chai");
const TodoBuilder = require ('../fixtures/builder/todo');
const chai = require ("chai");
const Challenger = require ('../services/challenger.services')
const Challenges = require ('../services/challenges.services')
const Todos = require ('../services/todos.services')
//const TodosId200 = require ('../services/todos{id}(200).services')


describe('Отправляем сетевые запросы', () => {
    let token;
    before ('Получить токен', async () => {
      const response = await Challenger.post();
      token = response.headers['x-challenger'];
   });
   after ('Посмотреть результат', async () => {
       console.log('Результаты смотреть здесь');
    console.log(`https://apichallenges.herokuapp.com/gui/challenges/${token}`);
    });
   it ('Получить список заданий', async () => {
       const r = await Challenges.get(token);
       assert.strictEqual(r.statusCode, 200, 'statusCode не 200');
   });
   it ('Получить GET Todos', async () => {
       const r = await Todos.get(token);
       assert.strictEqual(r.statusCode, 200, 'statusCode не 200')
   })
   it ('Получить HEAD Todos', async () => {
    const r = await Todos.head(token);
    assert.strictEqual(r.statusCode, 200, 'statusCode не 200')
   })
   it ('Получить POST Todos', async () => {
    const r = await Todos.post(token);
    assert.strictEqual(r.statusCode, 201, 'statusCode не 201')
   })
   it ('Получить GET XML Todos', async () => {
    const r = await Todos.get(token);
    assert.strictEqual(r.statusCode, 200, 'statusCode не 200')
   })
   it ('Получить GET DoneStatus Todos', async () => {
    const r = await Todos.get(token);
    assert.strictEqual(r.statusCode, 200, 'statusCode не 200')
   })

});