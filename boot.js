requirejs.config({
  // Set burst to prevent any kind of cache
  urlArgs     : 'bust=' + (new Date()).getTime(),
  waitSeconds : 0,

  paths : {
    //CORE INCLUDES
    jquery: 'public/plugins/vendor/jquery/dist/jquery.min',
    backbone: 'public/plugins/vendor/backbone/backbone',
    marionette: 'public/plugins/vendor/marionette/lib/backbone.marionette',
    underscore: 'public/plugins/vendor/underscore/underscore',
    text: 'public/plugins/vendor/text/text',
    BackboneStick: 'public/plugins/vendor/backbone.stickit/backbone.stickit',
    localstorage: 'public/plugins/vendor/backbone.localStorage/backbone.localStorage',
    bootstrap: 'public/plugins/vendor/bootstrap/dist/js/bootstrap',
    Sortable: 'public/plugins/vendor/Sortable/jquery.fn.sortable',
    userModel: 'frontend/modules/user/models/user'
  },

  shim : {
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },

    // main application
    userModel: {
      deps: ['backbone', 'marionette', 'underscore'],
      exports: 'userModel'
    }
  }
});

define(['userModel', 'marionette', 'underscore', 'text', 'bootstrap', 'localstorage'], function (UserModel) {

  // Variaveis base instanciadas no sistema
  window.App = new Backbone.Marionette.Application();
  window.App.Name = 'spotted';
  window.App.Language = 'pt-BR';
  window.App.BaseUrl = (location.hostname === 'localhost') ? 'http://localhost/ttracker/' : '';


  var MainRouter = Backbone.Router.extend({
    routes : {
      '': 'login',
      'login': 'login',
      'boards': 'boards',
      'logout': 'userLogout',
    },

    boards : function()
    {
      require(['frontend/modules/boards/views/boardView'], function ( Board ) {
        window.App.mainRegion.show( new Board() );
        window.App.mainRegion.show();

      });
    },

    userLogout: function ()
    {
      window.App.User.destroy();
      window.App.Router.navigate('#', {trigger: true});
    }
  });

  // Configures the user base model
  window.App.User = new UserModel();

  // Configures the router
  window.App.Router = new MainRouter();

  // Configures the basic regions of the app
  window.App.addRegions({
    headerRegion: '#main-header',
    mainRegion: '#main-content'
  });



  window.App.on('start', function() {

    if( window.App.User.isLogged() !== true ){

      require(['frontend/login/views/base'], function (LoginView) {
        window.App.Router.navigate('#', {trigger: true});
        window.App.mainRegion.show( new LoginView() );
      });

    } else {

      // Basico para carregamento do sistema
      require(['frontend/core/header/headerView'], function (Header) {
        window.App.Router.navigate('#boards', {trigger: true});
        window.App.headerRegion.show( new Header() );
      });

      Backbone.history.start();
    }
  });

  window.App.start();
});
