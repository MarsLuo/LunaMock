const Random = require('mockjs').Random;
const faker = require('faker');

var {error} = require('../response.js');

var user = (id) => {
    return {
        id,
        uid: faker.random.uuid(), 
        mobile: '16499799494',
        name:Random.cname()       
    };
}

var error = {
    idTooShort: error("100001", "your id is too short")
}

var userModle = {
    user,
    error
}

module.exports = userModle;