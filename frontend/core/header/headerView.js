define(['text!frontend/core/header/header.html'],
  function(tpl) {
  return Backbone.Marionette.ItemView.extend({
    template: _.template(tpl),

    ui: {
      logoutButton: '#btn-logout',
      userName: '.navbar .user'
    },

    updateDisplay: function() {
      var self = this;
      self.$el.toggle(!_.isNull(App.User.get('logged')));
    },

    onRender: function() {
      this.ui.userName.text(App.User.get('user'));
      this.updateDisplay();
    }
  });
});
