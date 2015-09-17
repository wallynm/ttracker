var parse = require('co-body');
var route = require('koa-route');
var render = require('../configs/render');
var config = require('../configs/config')();
var monk = require('monk');
var db = monk(config.databaseConnection);
var wrap = require('co-monk');

module.exports = function(app, route) {
  app.use(route.get('/', function *() {
    var session = this.session.data;
    var data = {};

    if (typeof session !== 'undefined' && session !== null) {
      data.user = {
        logged : session.logged,
        user : session.user,
        email : session.email
      };
    }

    this.body = yield render('index.html', {data : data });
  }));
}
