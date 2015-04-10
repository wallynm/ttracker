define(['frontend/modules/application/baseLayout', 'frontend/core/header/headerView'], function(Layout, Header) {

  window.routerChannel = Backbone.Radio.channel('router');

  return Marionette.Application.extend({
    initialize : function() {
      this.layout = new Layout();
      this.layout.render();

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
      Backbone.history.start();

      if (App.User.isLogged() !== true) {
        App.Router.navigate('#login', {trigger: true});
      } else {

        App.layout.header.show(new Header());
        App.Router.navigate('#boards', {trigger: true});
      }
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
      alert('onEnterRoute')
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
