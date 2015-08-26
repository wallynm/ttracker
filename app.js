var koa = require('koa');
var path = require('path');
var fs = require('fs');
var serve = require('koa-static');
var route = require('koa-route');
var logger = require('koa-logger');
var jsonp = require('koa-jsonp');
var session = require('koa-generic-session');
var MongoStore = require('koa-generic-session-mongo');
var render = require('./application/configs/render');
var config = require('./application/configs/config')();
var passport = require('./application/models/auth/github');
//var publicRouter = new router();
//var securedRouter = new router();


/******************************************************
 * Initialize application
 ******************************************************/
var app = module.exports = koa();
app.use(logger());
app.use(jsonp());
app.use(passport.initialize());
app.use(passport.session());

/** Define public path, for css/js/images **/
// app.use(serve(__dirname + '/public'));
// app.use(serve(__dirname + '/frontend'));
app.use(serve('.'));

/******************************************************
 * Configures session
 ******************************************************/
app.keys = ['ttracker'];
app.use(session({
  store: new MongoStore({
    url: config.databaseConnection,
    db: config.databaseName,
    cookie: {maxAge: 1000 * 10}
  })
}));

/******************************************************
 * Bootstrap routes/api
 * Scan all directory /routes and add to app
 ******************************************************/
var routesPath = path.join(__dirname, 'application/routes');
fs.readdirSync(routesPath).forEach(function(file) {
  if(file[0] === '.') return;
  require(routesPath + '/' + file)(app, route);
});

/******************************************************
 * Handle Error 404 and 500
 ******************************************************/
app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(function *(){
  var err = new Error();
  this.status = 404;
  this.body  = yield render('404.html', { errors: err});
});

module.exports = function(app, route) {
  app.use(route.get('/', function *() {
    this.body = yield render('index.html');
  }));
}

/******************************************************
 * Start server
 ******************************************************/
if (!module.parent) {
  var port = process.env.PORT || config.port || 9001;
  app.listen(port);
  console.log('Running %s site at: http://localhost:%d', config.mode, port);
}

// publicRouter.get('/auth/github', passport.authenticate('github', {scope: ['user','repo']}));
// publicRouter.get('/auth/github/callback',
//   passport.authenticate('github', {successReturnToOrRedirect: '/', failureRedirect: '/'})
// );
//
// app.listen(3000);
