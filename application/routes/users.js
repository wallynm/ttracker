var config = require('../configs/config')();
var monk = require('monk');
var db = monk(config.mongoUrl);
var wrap = require('co-monk');
var parse = require('co-body');
var Users = wrap(db.get('users'));

module.exports = function(app, route) {

  app.use(route.post('/api/users/login', function *() {
    if (this.method !== 'POST') return yield next;

    var body = {};
    var input = yield parse(this);
    var user  = yield Users.findOne({email: input.email, pass: input.pass});

    // Only configures the session if user logg
    if(user !== null && user !== '') {
      user.logged = true;
      this.session.data = user;
      body = user;
    }
    this.body = body;
  }));

  app.use(route.get('/api/users/session', function *() {
    if (this.method !== 'GET') return yield next;
    this.body = this.session.data;
  }));
}
