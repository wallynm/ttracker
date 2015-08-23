define(function() {
  return Marionette.CompositeView.extend({

    /**
     Original event
     render: function() {
       this._ensureViewIsIntact();
       this._isRendering = true;
       this.resetChildViewContainer();

       this.triggerMethod('before:render', this);

       this._renderTemplate();
       this._renderChildren();

       this._isRendering = false;
       this.isRendered = true;
       this.triggerMethod('render', this);
       return this;
     },
    */

    render: function() {
      var self = this;

      this._ensureViewIsIntact();
      this._isRendering = true;
      this.resetChildViewContainer();

      this.triggerMethod('before:render', this);
      this.triggerMethod('before:render', this);

      $.when(self.fetch(arguments))
      .then(function() {
        self.triggerMethod('fetch', this);
      })
      .then(function() {
        self._renderTemplate();
        self._renderChildren();

        self._isRendering = false;
        self.isRendered = true;
        self.triggerMethod('render', self);
      });

    },

    _render : function() {},
    fetch : function() {},
  });
});
