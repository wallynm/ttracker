define(['frontend/modules/application/baseLayout'], function(Layout) {

  window.routerChannel = Backbone.Radio.channel('router');

  return Marionette.Application.extend({
    initialize : function() {
      this.$body = $(document.body);
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
      alert('start');
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
