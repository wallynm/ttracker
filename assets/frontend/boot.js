function popupCallback(a, b, c) {
  console.warn(a, b, c);
}

require(['application', 'userModel', 'backbone', 'backbone.marionette', 'bootstrap', 'bootstrap-dialog', 'localstorage', 'helper'], function(Application, UserModel) {

  window.App = new Application();

  var MainRouter = Backbone.Router.extend({
    routes : {
      '': 'login',
      'login': 'login',
      'boards*': 'boards',
      'lists*': 'lists',
      'user*': 'user',
      'logout*': 'userLogout',
    },

    login : function() {
      require(['frontend/modules/login/views/base'], function(View) {
        App.layout.getRegion('content').show(new View());
      });
    },

    boards : function() {
      require(['frontend/modules/boards/router'], function(Router) {
        new Router('boards', {
          container: App.layout.getRegion('content')
        });
      })
    },

    user : function() {
      require(['frontend/modules/user/router'], function(Router) {
        new Router('user', {
          container: App.layout.getRegion('content')
        });
      });
    },

    userLogout: function() {
      App.User.destroy();
      App.Router.navigate('#', {trigger: true});
    }
  });

  // Configures the user base model
  App.User = new UserModel();

  // Configures the router
  App.Router = new MainRouter();

  // Starts the app
  App.start();
});
