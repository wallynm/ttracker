define(['text!frontend/modules/application/templates/sidebar.html'],
  function(tpl) {
  return Backbone.Marionette.ItemView.extend({
    template: _.template(tpl),
    el: "#app-sidebar",

    onRender: function() {
      this.$el.hide();
      this.$el.html(view.el);
      this.$el.slideDown("fast");
    },

    updateDisplay: function() {
      console.warn(this._parent);
      var self = this;
      self.$el.toggle(!_.isNull(App.User.get('logged')));
    },

    onRender: function() {
      this.updateDisplay();
    }
  });
});
