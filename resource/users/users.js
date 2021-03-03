var {response, code} = require('../response.js');
var user = require('./model');
module.exports = [
    {
      path: '/users/:id',
      method: 'get',
      operation(req, res, next) {
        var {code, body} = handlerUserInfo(req);
        res.send(code, body);
        next();
      }
    }
  ];
  
  function handlerUserInfo(req) {
    let id = req.params.id;
    if(id.length > 5) {
      return response(code.success, user.user(id))
    }else {
      return response(code.paramsError, null, user.error.idTooShort)
    }
  }