var config = require('../configs/config')();
var _ = require('underscore');
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

  app.use(route.post('/api/users/register', function *() {
    if (this.method !== 'POST') return yield next;

    var body = {};
    var input = yield parse(this);

    if (!_.isEmpty(input.user) && !_.isEmpty(input.email) && !_.isEmpty(input.pass)) {
      var user = yield Users.insert({user: input.user, email: input.email, pass: input.pass});
      user.logged = true;
      this.session.data = user;
      body = user;
    }

    this.body = body;
  }));

  app.use(route.get('/api/users/logout', function *() {
    if (this.method !== 'GET') return yield next;
    var body = {'session': undefined};

    if (!_.isUndefined(this.session.data)) {
      this.session.data = undefined;
    }

    this.body = body;
  }));

  app.use(route.get('/api/users/session', function *() {
    if (this.method !== 'GET') return yield next;
    var body = {};

    if (this.session.data) {
      body = this.session.data;
    }

    this.body = body;
  }));

  app.use(route.get('/api/users/emailcheck/:email', function *(email) {
    if (this.method !== 'GET') return yield next;

    var body = {};
    var user  = yield Users.findOne({email: email});

    this.body = {registered: !_.isNull(user)};
  }));
}
