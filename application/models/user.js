//Middleware: authed
function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
  } else {
    //Set redirect path in session
    this.session.returnTo = this.session.returnTo || this.req.url;
    this.redirect('/auth/github');
  }
}

// app.use(function *() {
//   switch (this.path) {
//   case '/get':
//     get.call(this);
//     break;
//   case '/remove':
//     remove.call(this);
//     break;
//   }
// });
//
// function get() {
//   var session = this.session;
//   session.count = session.count || 0;
//   session.count++;
//   this.body = session.count;
// }
//
// function remove() {
//   this.session = null;
//   this.body = 0;
// }
