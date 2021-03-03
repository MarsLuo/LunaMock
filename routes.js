const _ = require('lodash');

// 加载所有mock资源
const resources = _.flatten([
  // require('./resource/encourages/encourages.js'),
  require('./resource/users/users.js')
]);

class Display {
  constructor() {
    this.routes = [];
  }
  add(method, path) {
    this.routes.push({method, path: path});
  }
  show() {
    this.routes.forEach(({method, path}) => {
      console.log(method, path);
    });
  }
}

const display = new Display();
module.exports = (server, {baseURL}) => {
  resources.forEach(({path, method, operation}) => {
    const url = `${baseURL}${path}`;
    server[method](url, operation);

    display.add(method, url);
  });

  display.show();
};
