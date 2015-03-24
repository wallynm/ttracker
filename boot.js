requirejs.config({
  // Set burst to prevent any kind of cache
  urlArgs     : "bust=" + (new Date()).getTime(),
  waitSeconds : 0,

  paths : {
    //CORE INCLUDES
    jquery          : 'public/plugins/vendor/jquery/dist/jquery.min',
    backbone        : 'public/plugins/vendor/backbone/backbone',
    marionette      : 'public/plugins/vendor/marionette/lib/backbone.marionette',
    underscore      : 'public/plugins/vendor/underscore/underscore',
    text            : 'public/plugins/vendor/text/text',

    // ADDONS
    BackboneStick   : 'public/plugins/vendor/backbone.stickit/backbone.stickit',
    localstorage    : 'public/plugins/vendor/backbone.localStorage/backbone.localStorage',
    bootstrap       : 'public/plugins/vendor/bootstrap/dist/js/bootstrap',
    Sortable        : 'public/plugins/vendor/Sortable/jquery.fn.sortable',

    // ModulesSystem
    userModel : 'frontend/user/models/user'
  },

  shim : {
    bootstrap: {
      deps: ["jquery"],
      exports: "bootstrap"
    },

    // main application
    userModel: {
      deps: ["backbone", "marionette", "underscore"],
      exports: "userModel"
    }
  }
});

define(['userModel', 'marionette', 'underscore', 'text', 'bootstrap', 'localstorage'], function (userModel) {

  // Variaveis base instanciadas no sistema
  window.App = new Backbone.Marionette.Application();
  window.App.Name     = 'spotted';
  window.App.Language = 'pt-BR';
  window.App.BaseUrl  = (location.hostname == 'localhost') ? 'http://localhost/ttracker/' : '';


  mainRouter = Backbone.Router.extend({
    routes : {
      ""         : "login",
      "login"     : "login",
      "boards"   : "boards",
      "logout"   : "userLogout",
    },

    boards : function()
    {
      require(['frontend/boards/views/boards'], function ( issueBoard ) {
        App.mainRegion.show( new issueBoard() );
      });
    },

    userLogout: function ()
    {
      App.User.destroy();
      App.Router.navigate('#', {trigger: true});
    }
  });

  // Instancia o model de user
  App.User = new userModel();


  // Configura o router
  App.Router = new mainRouter();

  // Configura as regioes do sistema
  App.addRegions({
    headerRegion : "#main-header",
    mainRegion   : "#main-content",
  });



  App.on('start', function() {

    if( App.User.isLogged() !== true ){

      require(['frontend/login/views/base'], function (loginView) {
        App.Router.navigate('#', {trigger: true});
        App.mainRegion.show( new loginView() );
      });

    } else {

      // Basico para carregamento do sistema
      require(['frontend/core/views/appHeader', 'frontend/core/views/appBody'], function (header, body) {
        App.Router.navigate('#boards', {trigger: true});
        App.headerRegion.show( new header() );
        App.mainRegion.show( new body() );
      });

      Backbone.history.start();

    }
  });

  App.start();
});
