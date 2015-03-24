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
    bootstrap      : 'public/plugins/vendor/bootstrap/dist/js/bootstrap',

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

define(['marionette', 'underscore', 'text', 'bootstrap'], function () {

  // Variaveis base instanciadas no sistema
  window.App = new Backbone.Marionette.Application();
  window.App.Name     = 'spotted';
  window.App.Language = 'pt-BR';
  window.App.BaseUrl  = (location.hostname == 'localhost') ? 'http://localhost/ttracker/' : '';


  mainRouter = Backbone.Router.extend({
    routes : {
      ""         : "userLogin",
      "logout"   : "userLogout",
      "timeline" : "timelinePage",
    },

    timelinePage : function()
    {
      // Basico para carregamento do sistema
      require(['frontend/core/sidebar/views/leftsidebar', 'frontend/core/header/views/base', 'frontend/core/main/views/timeline'], function ( leftsidebar, header, timeline) {
        App.leftSidebar.show( new leftsidebar() );
        App.headerRegion.show( new header() );
        App.mainRegion.show( new timeline() );
      });
    },

    userLogin: function ()
    {
      require(['frontend/login/views/base'], function (view) {
        App.loginRegion.show( new view() );
      });
    },

    userLogout: function ()
    {
      App.models.User.destroy();
      App.Router.navigate('#', {trigger: true});
    }
  });

  // Instancia o model de user
  App.models.User = new userModel();


  // Configura o router
  App.Router = new mainRouter();

  // Configura as regioes do sistema
  App.addRegions({
    leftSidebar  : "#left-drawer",
    headerRegion : "#main-header",
    mainRegion   : "#main-content",
    modalRegion  : "#modal-content",
    loginRegion  : "#login-content"
  });



  App.on('start', function() {
    Backbone.history.start();

    if( App.models.User.isLogged() !== true ){
      App.Router.navigate('#', {trigger: true});
    }
  });

  App.start();
});
