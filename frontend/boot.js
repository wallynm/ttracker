require(['application', 'userModel', 'backbone', 'backbone.marionette', 'bootstrap', 'localstorage'], function(Application, UserModel) {

  window.App = new Application();

  var MainRouter = Backbone.Router.extend({
    routes : {
      '': 'login',
      'login': 'login',
      'boards': 'boards',
      'user': 'user',
      'logout': 'userLogout',
    },

    boards : function() {
      require(['frontend/modules/boards/router'], function(Router) {
        new Router({
          container: App.mainRegion
        });
      });
    },

    user : function() {
      require(['frontend/modules/user/router'], function(Router) {
        new Router({
          container: App.mainRegion
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
