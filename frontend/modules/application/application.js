define(['frontend/modules/application/baseLayout'], function(Layout) {

  window.routerChannel = Backbone.Radio.channel('router');

  return Marionette.Application.extend({
    initialize : function() {
      this.name = 'ttracker';
      this.language = 'pt-BR';
      this.baseUrl = (location.hostname === 'localhost') ? 'http://localhost/ttracker/' : '';

      this.listenTo(window.routerChannel, {
        'before:enter:route' : this.onBeforeEnterRoute,
        'enter:route'        : this.onEnterRoute,
        'error:route'        : this.onErrorRoute
      });
    },

    onStart : function() {
      var self = this;

      // Only starts the app once the session has already checkedfd
      App.User.checkSession()
      .done(function(){
        Backbone.history.start();
        self.layout = new Layout();
        self.layout.render();

        if (App.User.isLogged()) {
          App.Router.navigate('#boards', {trigger: true});
        } else {
          App.Router.navigate('#login', {trigger: true});
        }
      });
    },

    onBeforeEnterRoute : function() {
      // this.transitioning = true;
      // // Don't show for synchronous route changes
      // _.defer(() => {
      //   if (this.transitioning) {
      //     nprogress.start();
      //   }
      // });
    },

    onEnterRoute : function() {
      // alert('onEnterRoute')
      // this.transitioning = false;
      // this.$body.scrollTop(0);
      // nprogress.done();
    },

    onErrorRoute : function() {
      // this.transitioning = false;
      // nprogress.done(true);
    }
  });
});
