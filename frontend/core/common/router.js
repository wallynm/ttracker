define(['backbone.radio', 'backbone.subroute'], function() {

  return Backbone.SubRoute.extend({
    createTrailingSlashRoutes: true,
    promisse: $.Deferred(),

    constructor : function() {
      this.channel = Backbone.Radio.channel('router');
      this.on('all', this._onRouterEvent);
      this.listenTo(Backbone.history, 'route', this._onHistoryRoute);
      Backbone.SubRoute.apply(this, arguments);
    },

    _onRouterEvent : function() {
      var args = arguments;
      var eventName = args[0];

      this.channel.trigger(eventName, this, args);
    },

    _onHistoryRoute : function(router) {
      console.warn('Event _onHistoryRoute ---> ' + router);

      if (this === router) {
        this.active = true;
      } else {
        this.active = false;
      }
    },

    resolve : function(object) {
      this.promisse.resolve(object);
    },

    execute : function(callback, args) {
      var self = this;
      if (!this.active) {
        this.triggerMethod('before:enter', args);
      }
      self.triggerMethod('before:route', args);

      $.when(this._execute(callback, args)).then(function() {
        if (!self.active) {
          self.triggerMethod('enter', args);
        }
        self.triggerMethod('route', args);
      });
    },

    _execute : function(callback, args) {
      var self = this;
      callback.apply(this, args);

      this.promisse.done(function(baseView) {
        baseView.router = self;
        return baseView.enter(args);
      });
    },

    triggerMethod: Marionette.triggerMethod
  });
});
