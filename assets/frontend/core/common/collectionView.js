define(function() {
  return Marionette.CollectionView.extend({

    /**
     Original event
     render: function() {
       this._ensureViewIsIntact();
       this.triggerMethod('before:render', this);
       this._renderChildren();
       this.isRendered = true;
       this.triggerMethod('render', this);
       return this;
     },
    },*/

    render: function() {
      var self = this;
      this._ensureViewIsIntact();

      this.triggerMethod('before:render', this);
      this.triggerMethod('before:render', this);

      $.when(self.fetch(arguments))
      .then(function() {
        self.triggerMethod('fetch', this);
      })
      .then(function() {
        self._renderChildren();
        self.isRendered = true;
        self.triggerMethod('render', self);
        return self;
      });

    },

    _render : function() {},
    fetch : function() {},
  });
});
