requirejs.config({
  // Set burst to prevent any kind of cache
  urlArgs: 'bust=' + (new Date()).getTime(),
  waitSeconds: 0,
  baseUrl: './',

  paths : {
    //CORE INCLUDES
    'jquery': 'public/plugins/vendor/jquery/dist/jquery.min',
    'backbone': 'public/plugins/vendor/backbone/backbone',
    'backbone.marionette': 'public/plugins/vendor/marionette/lib/backbone.marionette',
    'backbone.radio': 'public/plugins/vendor/backbone.radio/src/backbone.radio',
    'backbone.radio.shim': 'public/plugins/radio.shim',
    'backbone.babysitter': 'public/plugins/vendor/backbone.babysitter/src/build/backbone.babysitter',
    'backbone.wreqr': 'public/plugins/vendor/backbone.wreqr/src/build/backbone.wreqr',
    'backbone.subroute': 'public/plugins/vendor/backbone.subroute/backbone.subroute',
    'backbone.require': 'public/plugins/backbone.require',
    'underscore': 'public/plugins/vendor/underscore/underscore',

    'backbone.stick': 'public/plugins/vendor/backbone.stickit/backbone.stickit',
    'text': 'public/plugins/vendor/text/text',
    'localstorage': 'public/plugins/vendor/backbone.localStorage/backbone.localStorage',
    'bootstrap': 'public/plugins/vendor/bootstrap/dist/js/bootstrap',
    'Sortable': 'public/plugins/vendor/Sortable/jquery.fn.sortable',

    'application': 'frontend/modules/application/application',
    'userModel': 'frontend/modules/user/models/user',
    'commonLayout' : 'frontend/modules/application/baseLayout',
  },

  shim : {
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },

    'backbone' :{
      exports : 'Backbone',
      deps: ['underscore', 'jquery']
    },

    'backbone.wreqr': {
      deps: ['backbone']
    },

    'backbone.radio': {
      deps: ['backbone', 'backbone.wreqr'],
    },

    'backbone.subroute': {
      deps: ['backbone'],
    },

    'text': {
      deps:['underscore']
    },

    'backbone.marionette': {
      deps: ['backbone', 'backbone.radio'],
    },

    // main application
    userModel: {
      deps: ['backbone.marionette'],
      exports: 'userModel'
    },
    commonLayout: {
      deps: ['backbone.marionette'],
      exports: 'userModel'
    },
    application: {
      deps: ['backbone.marionette'],
      exports: 'application'
    }
  }
});
