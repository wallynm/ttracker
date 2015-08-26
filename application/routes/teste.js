var parse = require('co-body');
var route = require('koa-route');
var render = require('../configs/render');
var config = require('../configs/config')();
var monk = require('monk');
var db = monk(config.databaseConnection);
var wrap = require('co-monk');

module.exports = function(app, route) {
  app.use(route.get('/', function *() {
    this.body = yield render('index.html');
  }));
}
