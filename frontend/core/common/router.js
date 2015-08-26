define(['backbone.radio', 'backbone.subroute'], function() {

  return Backbone.SubRoute.extend({
    createTrailingSlashRoutes: true,
    promisse: $.Deferred(),

    constructor: function() {
      this.channel = Backbone.Radio.channel('router');
      this.on('all', this._onRouterEvent);
      this.listenTo(Backbone.history, 'route', this._onHistoryRoute);
      Backbone.SubRoute.apply(this, arguments);
    },

    _onRouterEvent: function(router) {

      var args = arguments;
      var eventName = args[0];
      console.warn('Event _onRouterEvent ---> ', eventName, this, args);

      this.channel.trigger(eventName, this, args);
    },

    _onHistoryRoute: function(router) {
      console.warn('Event _onHistoryRoute ---> ' + router);

      if (this === router) {
        this.active = true;
      } else {
        this.active = false;
      }
    },

    resolve: function(object) {
      this.promisse.resolve(object);
    },


    /**
     * Execute hoje esta se portando bem, uma vez que o mesmo esta trabalhando
     * corretamente com as promisses retornadas pelos devidos routers
     * @param  {Function} callback [description]
     * @param  {[type]}   args     [description]
     * @return {[type]}            [description]
     */
    execute: function(callback, args) {
      var self = this;
      // if (!self.active) {
      //   self.triggerMethod('before:enter:route', args);
      // }
      // ;
      // console.warn(self);
      // console.warn(self.onBeforeEnter);

      // console.warn()
      var callBefore = Backbone.Radio.channel('router')._events['before:enter'][0]['callback'];
      var beforeEnter = callBefore.apply(this)

      $.when(beforeEnter)
      .then(function() {
        self._execute(callback, args)
        if (!self.active) {
          self.triggerMethod('enter:route', args);
        }
        self.triggerMethod('enter:route', args);
      });
    },

    /**
     * Ainda nao compreendi a intencao do promisse.done, e onde o mesmo deveria ser utilizado
     * posteriormente irei checar no repositorio oficial o qual dei fork para compreender
     * a utilização do mesmo em um projeto funcional
     *
     * @param  {Function} callback [description]
     * @param  {[type]}   args     [description]
     * @return {[type]}            [description]
     */
    _execute: function(callback, args) {
      var self = this;
      callback.apply(this, args);

      this.promisse.done(function(baseView) {
        alert('PROMISSE DONE!')
        baseView.router = self;
        return baseView.enter(args);
      });
    },

    triggerMethod: Marionette.triggerMethod
  });
});
