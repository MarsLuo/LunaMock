const Random = require('mockjs').Random;
const faker = require('faker');
var {response} = require('../response.js');

module.exports = [
    {
      path: '/users/me',
      method: 'get',
      operation(req, res, next) {
        res.send(200, userInfo(req));
        next();
      }
    }
  ];
  
  function userInfo(req) {
    return {
        id: faker.random.uuid(), 
        mobile: '16499799494',
        name:Random.cname()
    };
  }