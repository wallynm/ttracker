define(function() {
  return Marionette.LayoutView.extend({
    regions: {},
    promisse: null,

    initialize : function() {
      this.promisse = $.Deferred();
    },

    _triggerMethod : function(name, args) {

      if (this.router) {
        this.router.triggerMethod(name + ':route', args);
      }
      this.triggerMethod(name, args);
    },

    /**
     Evento original do marionette
    render: function() {
      this._ensureViewIsIntact();

      this.triggerMethod('before:render', this);

      this._renderTemplate();
      this.isRendered = true;
      this.bindUIElements();

      this.triggerMethod('render', this);

      return this;
    },*/

    render: function() {
      var self = this;
      this._ensureViewIsIntact();

      this.triggerMethod('before:render', this);
      this.triggerMethod('before:fetch', this);

      $.when(self.fetch(arguments))
      .then(function() {
        self.triggerMethod('fetch', this);
      })
      .then(function() {
        self._renderTemplate();
        self.isRendered = true;
        self.bindUIElements();

        self.triggerMethod('render', this);
        return self;
      });
    },

    _render : function() {

    },

    fetch : function() {},
  });
});
