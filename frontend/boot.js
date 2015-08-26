require(['application', 'userModel', 'backbone', 'backbone.marionette', 'bootstrap', 'bootstrap-dialog', 'localstorage', 'helper'], function(Application, UserModel) {
  window.App = new Application();

  var MainRouter = Backbone.Router.extend({
    routes: {
      '': 'login',
      'login': 'login',
      'logout': 'logout',
      'boards*': 'boards',
      'lists*': 'lists'
    },

    boards: function() {
      require(['frontend/modules/boards/router'], function(Router) {
        new Router('boards', {
          container: App.layout.getRegion('content')
        });
      });

      // console.warn(this.promisse)
    },

    login: function() {
      require(['frontend/modules/login/views/base'], function(View) {
        App.layout.getRegion('content').show(new View());
      });
    },

    logout: function() {
      App.User.logout()
      .done(function() {
        App.Router.navigate('#login', {trigger: true});
      });
    }
  });




  // Configures the user base model
  App.User = new UserModel();

  // Configures the router
  App.Router = new MainRouter();

  // Starts the app
  App.start();
});
