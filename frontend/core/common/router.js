define(['backbone.radio', 'backbone.subroute'], function() {

  return Backbone.SubRoute.extend({

    constructor : function() {
      this.channel = Backbone.Radio.channel('router');
      this.on('all', this._onRouterEvent);
      this.listenTo(Backbone.history, 'route', this._onHistoryRoute);
      Marionette.AppRouter.apply(this, arguments);
    },

    _onRouterEvent : function() {
      var args = arguments;
      var eventName = args[0];

      this.channel.trigger(eventName, this, args);
    },

    _onHistoryRoute : function(router) {
      if (this === router) {
        this.active = true;
      } else {
        this.active = false;
      }
    },

    execute : function() {
      var args = arguments;
      var callback = args[0];

      if (!this.active) {
        this.triggerMethod('before:enter', args);
      }

      this.triggerMethod('before:route', args);

      $.when(this._execute(callback, args)).then(function() {
        if (!this.active) {
          this.triggerMethod('enter', args);
        }
        this.triggerMethod('route', args);
      });
    },

    _execute : function() {
      var args = arguments;
      var callback = args[0];
      var route = callback.apply(this, args);

      console.warn('Não tenho certeza se esta instancia aplicada esta correta, efeutar devidos testes');
      if (route instanceof Backbone.SubRouter) {
        route.router = this;

        console.warn('ESTA CLASSE DISPARA O ROUTE.ENTER QUE EU ESTAVA PROCURANDO QUE FAZ O CONSTROLE DO FETCH E DAS PROMISSES');
        return route.enter(args);
      }
    },

    triggerMethod: Marionette.triggerMethod
  });
});
